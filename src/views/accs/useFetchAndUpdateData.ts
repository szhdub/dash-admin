import { reactive, toRefs } from "vue";
import { fetchAccsColumnInfo } from "@/api/dash";
import { CTableColumn } from "#/table";

export function useFetchAndUpdateData() {
  const state = reactive({
    articleColumns: [] as CTableColumn<any>[]
  });

  const fetchAndUpdateData = async () => {
    try {
      const result = await fetchAccsColumnInfo();
      state.articleColumns = result;
    } catch (error) {
      console.error("Error fetching admin info:", error);
    }
  };

  return { ...toRefs(state), fetchAndUpdateData };
}
