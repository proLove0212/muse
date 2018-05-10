import DateDisplay from './DateDisplay';
import MonthDayView from './MonthDayView';
import YearView from './YearView';
import MonthView from './MonthView';
import * as dateUtils from './dateUtils';

export default {
  name: 'mu-date-picker',
  props: {
    dateTimeFormat: {
      type: Object,
      default () {
        return dateUtils.dateTimeFormat;
      }
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    date: {
      type: Date,
      default () {
        return new Date();
      }
    },
    type: {
      type: String,
      default: 'date' // date, year, month
    },
    maxDate: {
      type: Date,
      default () {
        return dateUtils.addYears(new Date(), 100);
      }
    },
    minDate: {
      type: Date,
      default () {
        return dateUtils.addYears(new Date(), -100);
      }
    },
    landscape: Boolean,
    noDisplay: Boolean,
    shouldDisableDate: Function
  },
  data () {
    return {
      displayDate: this.date,
      view: this.type === 'date' ? 'monthDay' : this.type === 'year' ? 'year' : 'month'
    };
  },
  methods: {
    handleYearChange (year) {
      const date = dateUtils.cloneAsDate(this.displayDate);
      date.setDate(1);
      date.setFullYear(year);
      this.changeDisplayDate(date);
      if (this.type === 'year') return this.changeDate(date);
      this.changeView(this.type === 'month' ? 'month' : 'monthDay');
    },
    handleMonthChange (date) {
      this.changeDisplayDate(date);
      if (this.type === 'month') return this.changeDate(date);
      this.changeView('monthDay');
    },
    handleSelect (date) {
      if (date.getTime() > this.maxDate.getTime()) date = new Date(this.maxDate.getTime());
      if (date.getTime() < this.minDate.getTime()) date = new Date(this.minDate.getTime());
      this.changeDisplayDate(date);
      this.changeDate(date);
    },
    changeDate (date) {
      this.$emit('change', date);
      this.$emit('update:date', date);
    },
    changeDisplayDate (date) {
      this.displayDate = date;
    },
    changeView (view) {
      this.view = view;
    }
  },
  render (h) {
    const monthdayView = h(MonthDayView, {
      props: {
        dateTimeFormat: this.dateTimeFormat,
        firstDayOfWeek: this.firstDayOfWeek,
        maxDate: this.maxDate,
        minDate: this.minDate,
        displayDate: this.displayDate,
        selectedDate: this.date,
        shouldDisableDate: this.shouldDisableDate
      },
      on: {
        changeView: this.changeView,
        select: this.handleSelect
      }
    });
    const yearView = h(YearView, {
      props: {
        displayDate: this.displayDate,
        maxDate: this.maxDate,
        minDate: this.minDate
      },
      on: {
        change: this.handleYearChange
      }
    });
    const monthView = h(MonthView, {
      props: {
        dateTimeFormat: this.dateTimeFormat,
        maxDate: this.maxDate,
        minDate: this.minDate,
        displayDate: this.displayDate
      },
      on: {
        changeView: this.changeView,
        change: this.handleMonthChange
      }
    });
    return h(
      'div',
      {
        staticClass: 'mu-datepicker',
        class: {
          'mu-datepicker-landspace': this.landscape
        }
      },
      [
        !this.noDisplay ? h(DateDisplay, {
          props: {
            type: this.type,
            monthDaySelected: this.view !== 'year',
            displayDate: this.displayDate,
            dateTimeFormat: this.dateTimeFormat
          },
          on: {
            changeView: this.changeView
          }
        }) : undefined,
        h(
          'div',
          {
            staticClass: 'mu-datepicker-container'
          },
          [
            this.view === 'monthDay'
              ? monthdayView
              : this.view === 'month' ? monthView : yearView,
            this.$slots.default
          ]
        )
      ]
    );
  },
  watch: {
    date (val) {
      this.displayDate = val;
    }
  }
};
