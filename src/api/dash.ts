import { http } from "@/utils/http";
import columnData from "@/assets/column.json";

enum API {
  FETCH_DASH_INFO = "/acc_count_jsx",
  FETCH_ACCS_COLUMN_INFO = "/accs_column_jsx",
  FETCH_ACCS_INFO = "/accs_jsx"
}

/**
 *
 * @description 获取Dash页面信息
 */
export const fetchDashInfo = async () => {
  try {
    const res = await http.post<{}, any>(API.FETCH_DASH_INFO);
    return res; // Return the response
  } catch (error) {
    throw error; // Rethrow the error
  }
};

/**
 *
 * @description 获取Accs Column信息
 */
export const fetchAccsColumnInfo = async () => {
  try {
    const res = await http.post<{}, any>(API.FETCH_ACCS_COLUMN_INFO);
    return res; // Return the response
    // return columnData;
  } catch (error) {
    throw error; // Rethrow the error
  }
};

/**
 *
 * @description 获取Accs信息
 */
export const fetchAccsInfo = async () => {
  try {
    const res = await http.post<{}, any>(API.FETCH_ACCS_INFO);
    return res; // Return the response
  } catch (error) {
    throw error; // Rethrow the error
  }
};
