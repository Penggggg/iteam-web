import * as React from 'react';
import './index.less';

import { InjectImage } from '../../decorate/injectImage';

/**组件：渐变image */
export default class GradientImage extends React.PureComponent< IProps, IState > {

    static defaultProps = {
        alt: ''
    }

    private imgArr: Array<{
        imgsrc: string,
        show: boolean
    }> = [ ]
    
    constructor( ) {
        super( );
        this.state = {
            imgArr: [ ]
        }
    } 

    componentWillMount( ) {
        let { imgsrc } = this.props;
        if ( imgsrc ) { 
            this.imgArr.push({ imgsrc, show: false }); 
            this.setState({
                imgArr: this.imgArr
            })
        }
    }

    componentWillReceiveProps({ imgsrc }: IProps ) {
        if ( imgsrc ) {
            this.imgArr.push({ imgsrc, show: false }); 
            this.setState({
                imgArr: this.imgArr
            })
        }
    }

    /**执行内部错误处理操作，和从props而来的错误处理函数 */
    private myErrorHandler( e ) {
        let { errorHandler } = this.props;
        console.error(`GradientImage error`);
        if ( errorHandler ) { errorHandler( e ) }
    }

    /**执行内部成功处理操作，和从props而来的成功处理函数 */
    private myLoadHandler( index ) {
        let { loadHandler } = this.props;
        let len = this.imgArr.length;
        /**渐变显示 */
        let newArr = this.imgArr.map( i => {
            i.show = false;
            return i;
        })
        setTimeout(( ) => {
            newArr[ index ].show = true;
            this.setState({ 
                imgArr: newArr
            })
        }, 16 )

        /**执行外部操作 */
        if ( loadHandler ) { loadHandler( )}
        /**减少dom数量 */
        setTimeout(( ) => {
            // this.checkDomList( )
        }, 120 )
    }

    /**减少已完成显示img标签的数量 */
    private checkDomList( ) {
        if ( this.imgArr.length > 1 ) {
            this.imgArr.shift( );
            this.setState({
                imgArr: this.imgArr
            })
        }
    }
    

    render( ) {
        let { imgsrc, alt, customStyle, round } = this.props;
        let { imgArr } = this.state; 
        
        return  <div className="gradientImage-container" style={ customStyle }>
        
            <div className="background-layout">
                    {
                        imgArr.map(( i, index ) => {
                            return <img src={ i.imgsrc } alt={ alt } className={`gradientImage ${i.show ? 'show': 'hide'} ${round ? 'round' : ''} `} key={`gradientImage-${index}`}
                                    onError={ e => this.myErrorHandler( e )} 
                                    onLoad={( ) => this.myLoadHandler( index )}/>
                        })
                    }
            </div>

            <div className="content-layout">
                { this.props.children }
            </div>
        </div>
    }

} 

interface IProps {
    /**图片路径 */
    imgsrc: string,
    /**图片描述 */
    alt?: string,
    /**错误处理 */
    errorHandler?: Function,
    /**成功处理 */
    loadHandler?: Function,
    /**自定义样式 */
    customStyle?:  Object,
    /**圆角样式 */
    round?: boolean
}

interface IState {
    imgArr: Array<{
        imgsrc: string,
        show: boolean
    }>
}

export let HocHomeGradientImage = InjectImage( GradientImage )('home')