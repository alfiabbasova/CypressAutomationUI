import {IframeHWPage} from '../../pages/IframeHomework'

describe('IFRAME HOMEWORK', () => {
    beforeEach(()=>{
        IframeHWPage.visit()
    })
    it('test iframe', () => {
        IframeHWPage.getIframeHW()
    });
});