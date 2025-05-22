import React from 'react';
import './Containers.css';


const Containers = () => {
  return (
    <div className="containers-page">
      <h2 className="containers-title">Типове контейнери</h2>

      <div className="container-card">
        <img src='./containers/container-NG.png' alt="20-футов контейнер" className="container-image" />
        <div className="container-info">
          <h3>Стандартен 20-футов контейнер (20'DV)</h3>
          <p>Подходящ за генерални товари с по-малък обем и по-голямо тегло.</p>

          <div className="container-table-wrapper">
            <table className="container-table">
              <thead>
                <tr>
                  <th colSpan="3">Външни размери</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Дължина</td><td colSpan="2">6,058 m</td></tr>
                <tr><td>Широчина</td><td colSpan="2">2,438 m</td></tr>
                <tr><td>Височина</td><td colSpan="2">2,591 m</td></tr>
              </tbody>

              <thead>
                <tr>
                  <th colSpan="3">Вътрешни размери</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Дължина</td><td colSpan="2">5,898 m</td>
                </tr>
                <tr>
                  <td>Широчина</td><td colSpan="2">2,352 m</td>
                </tr>
                <tr>
                  <td>Височина</td><td colSpan="2">2,393 m</td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th colSpan="3">Размери на вратата</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Широчина</td><td colSpan="2">2,340 m</td></tr>
                <tr><td>Височина</td><td colSpan="2">2,280 m</td></tr>
              </tbody>

              <thead>
                <tr>
                  <th>Обем</th>
                  <th>Макс. полезно тегло</th>
                  <th>Тегло на тара</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>33,20 m³</td>
                  <td>28 260 кг</td>
                  <td>2 220 кг</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center' }}><strong>Макс. общо тегло:</strong> 30 480 кг</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container-card">
        <img src='./containers/container-40-NG.png' alt="20-футов контейнер" className="container-image" />
        <div className="container-info">
          <h3>Стандартен 40-футов контейнер (40'DV)</h3>
          <p>Подходящ за генерални товари.</p>

          <div className="container-table-wrapper">
            <table className="container-table">
              <thead>
                <tr>
                  <th colSpan="3">Външни размери</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Дължина</td><td colSpan="2">12,192 m</td></tr>
                <tr><td>Широчина</td><td colSpan="2">2,438 m</td></tr>
                <tr><td>Височина</td><td colSpan="2">2,591 m</td></tr>
              </tbody>

              <thead>
                <tr>
                  <th colSpan="3">Вътрешни размери</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Дължина</td><td colSpan="2">12,032 m</td>
                </tr>
                <tr>
                  <td>Широчина</td><td colSpan="2">2,352 m</td>
                </tr>
                <tr>
                  <td>Височина</td><td colSpan="2">2,393 m</td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th colSpan="3">Размери на вратата</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Широчина</td><td colSpan="2">2,340 m</td></tr>
                <tr><td>Височина</td><td colSpan="2">2,280 m</td></tr>
              </tbody>

              <thead>
                <tr>
                  <th>Обем</th>
                  <th>Макс. полезно тегло</th>
                  <th>Тегло на тара</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>67,70 m³</td>
                  <td>28 260 кг</td>
                  <td>3 640 кг</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center' }}><strong>Макс. общо тегло:</strong> 32 500 кг</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container-card">
        <img src='./containers/container-open-top-NG.png' alt="20-футов контейнер" className="container-image" />
        <div className="container-info">
          <h3>Стандартен 20-футов опън топ контейнер (20'OT)</h3>
          <p>Подходящ за обемни товари, които трябва да се товарят с кран, отгоре.</p>

          <div className="container-table-wrapper">
            <table className="container-table">
              <thead>
                <tr>
                  <th colSpan="3">Външни размери</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Дължина</td><td colSpan="2">6,058 m</td></tr>
                <tr><td>Широчина</td><td colSpan="2">2,438 m</td></tr>
                <tr><td>Височина</td><td colSpan="2">2,591 m</td></tr>
              </tbody>

              <thead>
                <tr>
                  <th colSpan="3">Вътрешни размери</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Дължина</td><td colSpan="2">5,902 m</td>
                </tr>
                <tr>
                  <td>Широчина</td><td colSpan="2">2,350 m</td>
                </tr>
                <tr>
                  <td>Височина</td><td colSpan="2">2,348 m</td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th colSpan="3">Размери на вратата</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Широчина</td><td colSpan="2">2,340 m</td></tr>
                <tr><td>Височина</td><td colSpan="2">2,280 m</td></tr>
              </tbody>

              <thead>
                <tr>
                  <th>Обем</th>
                  <th>Макс. полезно тегло</th>
                  <th>Тегло на тара</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NONE</td>
                  <td>28 180 кг</td>
                  <td>2 300 кг</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center' }}><strong>Макс. общо тегло:</strong> 30 480 кг</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        
      </div>

      <div className="container-card">
        <img src='./containers/container-open-top-40-NG.png' alt="40-футов контейнер" className="container-image" />
        <div className="container-info">
          <h3>Стандартен 40-футов опън топ контейнер (40'OT)</h3>
          <p>Подходящ за дълги товари, които трябва да се товарят с кран, отгоре.</p>

          <div className="container-table-wrapper">
            <table className="container-table">
              <thead>
                <tr>
                  <th colSpan="3">Външни размери</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Дължина</td><td colSpan="2">12,192 m</td></tr>
                <tr><td>Широчина</td><td colSpan="2">2,438 m</td></tr>
                <tr><td>Височина</td><td colSpan="2">2,591 m</td></tr>
              </tbody>

              <thead>
                <tr>
                  <th colSpan="3">Вътрешни размери</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Дължина</td><td colSpan="2">12,036 m</td>
                </tr>
                <tr>
                  <td>Широчина</td><td colSpan="2">2,350 m</td>
                </tr>
                <tr>
                  <td>Височина</td><td colSpan="2">2,348 m</td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th colSpan="3">Размери на вратата</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Широчина</td><td colSpan="2">2,340 m</td></tr>
                <tr><td>Височина</td><td colSpan="2">2,280 m</td></tr>
              </tbody>

              <thead>
                <tr>
                  <th>Обем</th>
                  <th>Макс. полезно тегло</th>
                  <th>Тегло на тара</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NONE</td>
                  <td>30 480 кг</td>
                  <td>3 800 кг</td>
                </tr>
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center' }}><strong>Макс. общо тегло:</strong> 26 680 кг</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        
      </div>

      

    </div>
  );
};

export default Containers;
