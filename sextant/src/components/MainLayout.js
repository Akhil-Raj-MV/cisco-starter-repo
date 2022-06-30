import React,{useState} from 'react'
import Container from './Container';
import Ip from './Endpoints/Ip';
import Dp2 from './Endpoints/Dp2';
import Dp3 from './Endpoints/Dp3';
import Dp4 from './Endpoints/Dp4'



const MainLayout = () => {

    const [dataPoint,setDataPoint]=useState(1);

  return (
    <div>
        {(dataPoint===1) && 
            <Container dataPoint={dataPoint} setDataPoint={setDataPoint}>
                {<Ip/>}
            </Container>
        }
        {(dataPoint===2) && 
            <Container dataPoint={dataPoint} setDataPoint={setDataPoint}>
                {<Dp2/>}
            </Container>
        }
        {(dataPoint===3) && 
            <Container dataPoint={dataPoint} setDataPoint={setDataPoint}>
                {<Dp3/>}
            </Container>
        }
        {(dataPoint===4) && 
            <Container dataPoint={dataPoint} setDataPoint={setDataPoint}>
                {<Dp4/>}
            </Container>
        }




    </div>
  )
}

export default MainLayout