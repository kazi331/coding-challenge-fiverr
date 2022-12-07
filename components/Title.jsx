import { Badge, Button, Popconfirm } from "antd";
import axios from "axios";
import { useData } from "../contexts/dataContext";

const Title = ({ name, id }) => {
  const { refetch, setRefetch} = useData();

  const handleDelete = async () => {
    const res = await axios.delete('/api/appointments', { id })
    if (res.data.status === 'success') {
      setRefetch(!refetch)
    }
    new Promise((resolve) => {
      resolve(); // call resolve function after completing the pending task
    })
  };
  return (
    <div className='flex items-center justify-between'>
      <div className='relative inline-block'>
        <h2 className="text-gray-900 title-font font-medium">{name}</h2>
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