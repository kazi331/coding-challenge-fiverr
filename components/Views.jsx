import { Badge, Button, Collapse, Popconfirm, Skeleton } from 'antd';
import axios from 'axios';
import { useData } from '../contexts/dataContext';
const { Panel } = Collapse;

const Views = () => {
  const { data, loading, refetch, setRefetch } = useData();

  return (
    <>
      <h2 className='py-2 mb-2 text-center'>Appointments ({data?.length})</h2>
      <Skeleton loading={loading} />
      {data?.length === 0 ? <h2 className='py-4 text-center'>No Data found</h2> :
        <div className="text-gray-600 body-font">
          <div className="container mx-auto">
            <Collapse accordion >
              {data?.map(appointment => (
                <Panel header={<Title name={appointment.name} id={appointment._id} />} key={appointment._id}>
                  <ul>
                    {appointment?.sectors?.map((s, i) => <li key={i}>{s.value}- {s.label}</li>)}
                  </ul>
                </Panel>
              )
              )}
            </Collapse>

          </div>
        </div>}
    </>
  )
}
export default Views

const Title = ({ name, id }) => {
  const { refetch, setRefetch } = useData();

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

// {data.appointments?.map((d, i) => <Appoint key={i} data={d} />)}