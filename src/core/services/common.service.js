const CURRENT_ENTERPRISE_KEY = "current_enterprise";
const CURRENT_ENTERPRISE_DETAIL = "current_enterprise_detail";

export const geCurrentEnterprise = () => {
  return window.localStorage.getItem(CURRENT_ENTERPRISE_KEY);
};

export const saveCurrentEnterprise = data => {
  window.localStorage.setItem(CURRENT_ENTERPRISE_KEY, data);
};

export const destroyCurrentEnterprise = () => {
  window.localStorage.removeItem(CURRENT_ENTERPRISE_KEY);
};


export const geCurrentEnterpriseDetail = () => {
  return JSON.parse(window.localStorage.getItem(CURRENT_ENTERPRISE_DETAIL));
};

export const saveCurrentEnterpriseDetail = data => {
  window.localStorage.setItem(CURRENT_ENTERPRISE_DETAIL,JSON.stringify(data));
};

export const destroyCurrentEnterpriseDetail= () => {
  window.localStorage.removeItem(CURRENT_ENTERPRISE_DETAIL);
};

export default { geCurrentEnterprise, saveCurrentEnterprise, destroyCurrentEnterprise,geCurrentEnterpriseDetail, saveCurrentEnterpriseDetail, destroyCurrentEnterpriseDetail };