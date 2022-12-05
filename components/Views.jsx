import { Badge, Collapse, Skeleton } from 'antd';
import { useData } from '../contexts/dataContext';
const { Panel } = Collapse;

const Views = () => {
  const { data, loading } = useData();

  return (
    <>
      <h2 className='py-2 mb-2 text-center'>Appointments ({data?.length })</h2>
      <Skeleton loading={loading} />
      {data?.length === 0 ? <h2 className='py-4 text-center'>No Data found</h2> :
        <div className="text-gray-600 body-font">
          <div className="container mx-auto">
            <Collapse accordion >
              {data?.map(appointment => <Panel header={<Title name={appointment.name} />} key={appointment._id}>
                <ul>
                  {appointment?.sectors?.map((s, i) => <li key={i}>{s.value}- {s.label}</li>)}
                </ul>
              </Panel>
              )}
            </Collapse>
          </div>
        </div>}
    </>
  )
}
export default Views

const Title = ({ name }) => {
  return (
    <div className='relative inline-block'>
      <h2 className="text-gray-900 title-font font-medium">{name}</h2> <Badge dot status='success' className='absolute -right-2 -top-2' />
    </div>

  )
}

// {data.appointments?.map((d, i) => <Appoint key={i} data={d} />)}