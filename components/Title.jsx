import { Badge, Button, Popconfirm } from "antd";
import axios from "axios";
import { useData } from "../contexts/dataContext";

const Title = ({ name, id }) => {
  const { refetch, setRefetch } = useData();

  const handleDelete = async () => {
    const res = await axios.delete(`/api/appointments/?id=${id}`)
    if (res.data.status === 'success') {
      setRefetch(!refetch)
      // call resolve function after completing the pending task
      new Promise((resolve) => resolve())
    }
  };
  return (
    <div className='flex items-center justify-between dark:text-gray-200 '>
      <div className='relative'>
        <h2 className="title-font font-medium">{name}</h2>
        <Badge dot status='success' className='absolute -right-2 -top-2' />
      </div>
      {/* // delete button  */}
      <Popconfirm title="Confirm Delete?" okText="Delete" okType='danger' onConfirm={() => handleDelete(id)}>
        <Button type="primary" danger>Delete</Button>
      </Popconfirm>
    </div>

  )
}
export default Title