import React, { Component } from "react";
import './Content.css';

class Content extends Component {
    constructor(props) {
        super(props);
    
        // Початковий стан
        this.state = {
          styleElement3: '',
          styleElement4: ''
        };
      }
    
      // Обробник кліку на елемент 3
      handleElement3Click = () => {
        this.setState((prevState) => ({
          styleElement3: prevState.styleElement3 === 'highlighted1' ? 'highlighted2' : 'highlighted1'
        }));
      };
    
      // Обробник кліку на елемент 4
      handleElement4Click = () => {
        this.setState((prevState) => ({
          styleElement4: prevState.styleElement4 === 'highlighted2' ? 'highlighted1' : 'highlighted2'
        }));
      };
    
      render() {
        const { styleElement3, styleElement4 } = this.state;
        return (
          <div className="content">
            <p id="element3" className={styleElement3} onClick={this.handleElement3Click}>
              Освіта: спеціалізована школа №129 м.Києва,
              <br />
              Київський політехнічний інститут імені Ігоря Сікорського
            </p>
            <p id="element4" className={styleElement4} onClick={this.handleElement4Click}>
            Хобі:
            </p>
            <ul>
              <li>Збирати пазли</li>
              <li>Читати книги (особливо про історію)</li>
              <li>Грати в настільні ігри або відео-ігри</li>
              <li>Гуляти, годувати голубів і слухати музику</li>
              <li>Дивитися мультфільми, фільми, мультсеріали, серіали, аніме</li>
            </ul>

                <p>Улюблені книги:</p>
                <ol>
                    <li>"Маленький принц", Антуан де Сент-Екзюпері</li>
                    <li>"Великий Гетсбі", Скотт Фіцджеральд</li>
                    <li>"Колгосп тварин", Джордж Орвелл</li>
                </ol>

                <h2>Львів</h2>
                <p>
                    Львів — місто в Україні, адміністративний центр області, агломерації,
                    району, міської громади, національно-культурний та освітньо-науковий
                    осередок країни, великий промисловий центр і транспортний вузол,
                    вважається столицею Галичини та центром Західної України.
                </p>
                <p>
                    Історичний центр Львова занесено до списку Світової спадщини ЮНЕСКО.
                    У місті розташована найбільша кількість пам'яток архітектури в Україні.
                    2009 року Львову надано звання Культурної столиці України. Місто
                    періодично посідає чільні місця в рейтингах туристичної та інвестиційної
                    привабливості.
                </p>
            </div>
        );
    }
}

export default Content;