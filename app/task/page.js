import TaskFormCustom from "@/components/TaskFormCustom";
import TaskLists from "@/components/TaskLists";

const TaskPage = () => {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskLists />
    </div>
  );
};
export default TaskPage;
