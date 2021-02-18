import _ from "../util.js";

class CalendarManager {
    constructor(calendar, prevBtn = null, nextBtn = null) {
        this.calendar = calendar;
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
    }

    init() {
        if(!this._calendarIsNull()) 
            this.calendar.createCalendar();
    }
    
    setButtons(prevBtn, nextBtn) {        
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;                    
    }

    setButtonsEvent() {
        this._setPrevBtnClickEvent();
        this._setNextBtnClickEvent(); 
    }

    _calendarIsNull() {
        let bFlag;
        try {
            if (!this.calendar) {
                throw new Error('[!!!] calendar is null. Unable to execute..');
            } else {
                bFlag = false;
            }                
        } catch (err) {
            console.error(err.message);
            bFlag = true;
        }        

        return bFlag;
    }

    _setPrevBtnClickEvent() {        
        try {
            if (!this.prevBtn) 
                throw new Error('[!] prevBtn is null. Unable to add event..')
            else 
                _.addEvent(this.prevBtn, 'click', this._prevBtnClickEventHandler.bind(this));
        } catch(err) {
            console.error(err.message);
        }       
    }

    _prevBtnClickEventHandler() {
        if(!this._calendarIsNull())  {
            this.calendar.optionMonthMinus();
            this.calendar.removeAllChildNodes(); 
            this.calendar.createCalendar();  
        }                     
    }

    _setNextBtnClickEvent() {
        try {
            if (!this.nextBtn) 
                throw new Error('[!] nextBtn is null. Unable to add event..')
            else 
                _.addEvent(this.nextBtn, 'click', this._nextBtnClickEventHandler.bind(this));
        } catch(err) {
            console.error(err.message);
        }       
    }

    _nextBtnClickEventHandler() { 
        if(!this._calendarIsNull())  {
            this.calendar.optionMonthPlus();
            this.calendar.removeAllChildNodes(); 
            this.calendar.createCalendar();   
        }
    }
    
}

export default CalendarManager;