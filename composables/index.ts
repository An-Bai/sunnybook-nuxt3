import api from "@/api/index";
import util from "@/utils/time";
// composables/index.ts，api接口放在这个里面会自动导入函数
export const useApi = () => api;

// 时间工具类
export const timeUtil = () => util;
