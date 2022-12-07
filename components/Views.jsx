import { Collapse, Skeleton } from 'antd';
import { useData } from '../contexts/dataContext';
import Title from './Title';
const { Panel } = Collapse;

const Views = () => {
  const { data, loading, dataError} = useData();
  
  return (
    <>
      <h2 className='py-2 mb-2 text-center'>Appointments ({data?.length})</h2>
      <Skeleton loading={loading} />
      {dataError && <h2 className='text-center text-red-600'>Data loading Error!!</h2>}
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



// {data.appointments?.map((d, i) => <Appoint key={i} data={d} />)}