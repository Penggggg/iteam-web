import * as React from 'react';
import { homeImage$ } from '../store/homeImages.store';

import { Observable } from 'rxjs';


/**高阶装饰器：注入图像信息,注入到名为imgsrc的props中
 * 
 * 括号1参数为目标组件
 * 
 * 括号2参数为图片类型: 'home' | 'other'
 * 
 * 使用：InjectImage( component )('home')
 */
export let InjectImage = ( Wrapper ) => {

    return ( imageType: 'home' | 'other' ) => {

            class WrapperComponent extends React.PureComponent< IProps, IState > {

            constructor( ) {
                super( );
                this.state = {
                    imgsrc: ''
                }
            }

            componentDidMount( ) {
                let resource$;
                switch ( imageType ) {
                    case 'home': resource$ = homeImage$; break;
                    default: resource$ = homeImage$; break;
                }
                resource$.subscribe( x => this.setState({
                    imgsrc: x
                }))
            }

            render( ) {
                return <Wrapper {...this.state} {...this.props} />
            }

        }

        return WrapperComponent;
    }

}

interface IState {
    imgsrc: string
}

interface IProps {
    /**自定义样式 */
    customStyle?: Object,
    /**圆角样式 */
    round?: boolean
}

