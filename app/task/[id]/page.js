import { getTask } from "@/utils/actions";
import editForm from "@/components/editForm";
import Link from "next/link";

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <editForm task={task} />
    </>
  );
};
export default SingleTaskPage;
