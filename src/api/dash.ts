import { BasicResult } from "#/dashType";
import { http } from "@/utils/http";
import { CTableColumn } from "#/table";
import columnData from "@/assets/column.json";

enum API {
  FETCH_DASH_INFO = "/acc_count_jsx",
  FETCH_ACCS_COLUMN_INFO = "/acc_column"
}

/**
 *
 * @description 获取Dash页面信息
 */
export const fetchDashInfo = async () => {
  try {
    const res = await http.post<{}, BasicResult>(API.FETCH_DASH_INFO);
    return res; // Return the response
  } catch (error) {
    throw error; // Rethrow the error
  }
};

/**
 *
 * @description 获取Accs页面信息
 */
export const fetchAccsColumnInfo = async () => {
  try {
    return columnData; // Return the response
  } catch (error) {
    throw error; // Rethrow the error
  }
};
