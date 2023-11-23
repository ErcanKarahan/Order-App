import{Table, CloseButton, Button, CardHeader, CardBody, CardTitle, Card} from'react-bootstrap';
import Image from 'next/image';

export default function Warenkorb() {
    return (
      <div>
        <h1>Warenkorb</h1>
        <div className="row mt 4">
          <div className="col-9">
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Bild</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Menge</th>
                    <th>Betrag</th>
                    <th><CloseButton disabled/></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Image src={'/img/produkte/cola.jpg'} alt='cola' width={50} height={50}/>                  
                    </td>
                    <td>Cola</td>                    
                    <td>Doppelt</td>                    
                    <td>1</td>                    
                    <td>1.99</td>                    
                    <td><Button className='btn-sm'>x</Button></td>                    
                  </tr>
                  <tr>
                    <td>
                      <Image src={'/img/produkte/burger.jpg'} alt='burger' width={50} height={50}/>                  
                    </td>
                    <td>burger</td>                    
                    <td>Doppelt</td>                    
                    <td>1</td>                    
                    <td>6.99</td>                    
                    <td><Button className='btn-sm'>x</Button></td>                    
                  </tr>
                </tbody>
              </Table>
          </div>
          <div className="col-3 p-2">
              <div className='shadow'>
                <Card>
                  <CardHeader as='h5'>Gesamt</CardHeader>
                  <CardBody className='text-center'>
                      <CardTitle>
                        6.95 EUR
                      </CardTitle>
                      <Button variant='primary'>Zur Kasse</Button>
                  </CardBody>
                </Card>
              </div>      
          </div>

        </div>
      </div>
    )
  }
  