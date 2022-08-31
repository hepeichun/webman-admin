<?php
namespace plugin\admin\app;

use plugin\admin\app\model\AdminRole;
use plugin\admin\app\model\AdminRule;

class Admin
{
    public static function canAccess($controller, $action, &$code = 0, &$msg = '')
    {
        // 获取控制器鉴权信息
        $class = new \ReflectionClass($controller);
        $properties = $class->getDefaultProperties();
        $noNeedLogin = $properties['noNeedLogin'] ?? [];
        $noNeedAuth = $properties['noNeedAuth'] ?? [];

        // 不需要登录
        if (in_array($action, $noNeedLogin)) {
            return true;
        }

        // 获取登录信息
        $admin = admin();
        if (!$admin) {
            $msg = '请登录';
            // 401是未登录固定的返回码
            $code = 401;
            return false;
        }

        // 不需要鉴权
        if (in_array($action, $noNeedAuth)) {
            return true;
        }

        // 当前管理员无角色
        $roles = $admin['roles'];
        if (!$roles) {
            $msg = '无权限';
            $code = 2;
            return false;
        }

        // 角色没有规则
        $rules = AdminRole::whereIn('id', $roles)->pluck('rules');
        $rule_ids = [];
        foreach ($rules as $rule_string) {
            if (!$rule_string) {
                continue;
            }
            $rule_ids = array_merge($rule_ids, explode(',', $rule_string));
        }
        if (!$rule_ids) {
            $msg = '无权限';
            $code = 2;
            return false;
        }

        // 超级管理员
        if (in_array('*', $rule_ids)){
            return true;
        }

        // 没有当前控制器的规则
        $rule = AdminRule::where(function ($query) use ($controller, $action) {
            $query->where('name', "$controller@$action")->orWhere('name', $controller);
        })->whereIn('id', $rule_ids)->first();
        if (!$rule) {
            $msg = '无权限';
            $code = 2;
            return false;
        }

        return true;
    }
}