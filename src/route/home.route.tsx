import * as React from 'react';
import './home.less';
import { HocHomeGradientImage } from '../component/gradientImage'

let bgStyle = {
    width: '100%',
    height: `${document.body.scrollHeight}px`,
    position: 'relative'
}

let HomeRoute;
export default HomeRoute = ( props ) => <div style={ bgStyle }>
    <div className="cover-layout"></div>
    <HocHomeGradientImage customStyle={{ width: '100%', height: '100%' }}>
        <HocHomeGradientImage round={ true } customStyle={{ width: '96%', height: '94%', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
        
        </HocHomeGradientImage>      
    </HocHomeGradientImage>
    
    
</div>