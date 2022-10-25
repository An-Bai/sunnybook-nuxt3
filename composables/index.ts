import api from "@/api/index";

// composables/index.ts，api接口放在这个里面会自动导入函数
export const useApi = () => api;
