<template>
    <div class="date-string-input__calendar">
        <div class="date-string-input__controls">
            <btn class="date-string-input__prev-button"
                 @click="prevMonth">
                <template #icon>
                    <span class="mdi mdi-arrow-left-bold-circle"></span>
                </template>
            </btn>

            <div class="calendar__month-and-year">
                {{ currentMonth }} {{ currentYear }}
            </div>

            <div class="calendar__nav">
                <btn class="calendar__nav-dd"
                     :color="Colors.SECONDARY"
                     disabled>
                    <span>DD</span>
                </btn>

                <btn class="calendar__nav-mm"
                     :color="Colors.SECONDARY">
                    <span v-if="selectedMonth === ''"
                          @click="showMonths">
                        MM
                    </span>

                    <span v-else
                          @click="showMonths">
                        {{ selectedMonth }}
                    </span>
                </btn>

                <div v-show="monthsVisible"
                     class="calendar__mm">
                    <span v-for="month in shortMonths"
                          :key="'month' + month"
                          @click="selectMonth(month)">
                        {{ month }}
                    </span>
                </div>

                <btn class="calendar__nav-yyyy"
                     :color="Colors.SECONDARY">
                    <span v-if="selectedYear === 0"
                          @click="showYears">
                        YYYY
                    </span>

                    <span v-else
                          @click="showYears">
                        {{ selectedYear }}
                    </span>
                </btn>

                <div v-show="yearsVisible"
                     class="calendar__yyyy">
                    <span v-for="(year) in years"
                          :key="'year' + year"
                          @click="selectYear(year)">
                        {{ year }}
                    </span>
                </div>
            </div>

            <btn class="date-string-input__next-button"
                 @click="nextMonth">
                <template #icon>
                    <span class="mdi mdi-arrow-right-bold-circle"></span>
                </template>
            </btn>
        </div>

        <table class="date-string-input__calendar-table">
            <thead>
                <tr>
                    <th class="calendar__weekdays"
                        v-for="weekday in weekdays"
                        :key="'weekday' + weekday">
                        {{ weekday }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr class="calendar__days"
                    v-for="(week, index) in shortWeekdays"
                    :key="'week' + index">
                    <td @click="day ? selectDate(day, index) : () => {}"
                        v-for="(day, index) in week"
                        :key="'day' + index"
                        class="calendar__day"
                        :class="{ '--active': isActive,
                                  '--today': day === currentDate,
                                  '--disabled': !day,
                                }">
                        <span v-if="day">{{ day }}</span>
                        <span v-else>#</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import moment from 'moment';
import { Color } from '@/common/constants';

/**
 * @class Calendar
 */
@Component
export default class Calendar extends Vue {
    Colors = Color;

    private today = new Date();

    private currentDate = this.today.getDate();

    // private currentDayOfWeek = this.today.getDay();

    private months = moment.months();

    private shortMonths = moment.monthsShort();

    private currentMonthNumber = this.today.getMonth();

    private currentMonth = this.months[this.currentMonthNumber];

    private currentYear = this.today.getFullYear();

    private weekdays = moment.weekdaysShort();

    private shortWeekdays: (number | null)[][] = [];

    private calculateMonthDays(): void {
        const todayMonthFirstDay = new Date(
            this.today.getFullYear(),
            this.today.getMonth(),
            1,
        );
        const todayMoment = moment(this.today);
        const daysInMonth = todayMoment.daysInMonth(); // 31 день
        const weekdayOfFirstDayInMonth = moment(todayMonthFirstDay).weekday(); // 6 === Sat

        let todayWeekdayNumber = todayMoment.weekday();

        const result = [];

        let currentDayInMonth = 0;

        while (currentDayInMonth <= daysInMonth) {
            const week = [];

            let completeArrayByNulls = false;

            if (result.length) todayWeekdayNumber = 0;
            else for (let i = 0; i < todayWeekdayNumber; i += 1) week.push(null);

            while (todayWeekdayNumber <= 6) {
                if (currentDayInMonth > daysInMonth) {
                    week.push(null);
                    todayWeekdayNumber += 1;
                    if (todayWeekdayNumber < 6) currentDayInMonth += 1;
                    continue;
                }

                if (result.length) {
                    if (currentDayInMonth + 1 > daysInMonth) {
                        completeArrayByNulls = true;
                    }

                    week.push(currentDayInMonth);
                    if (todayWeekdayNumber < 6) currentDayInMonth += 1;
                    todayWeekdayNumber += 1;
                    continue;
                } else if (!completeArrayByNulls) {
                    if (todayWeekdayNumber < weekdayOfFirstDayInMonth) {
                        week.push(null);
                    } else {
                        week.push(currentDayInMonth + 1);
                        currentDayInMonth += 1;
                        todayWeekdayNumber += 1;
                        continue;
                    }
                } else {
                    if (currentDayInMonth + 1 > daysInMonth) {
                        completeArrayByNulls = true;
                    }
                    week.push(null);
                }

                todayWeekdayNumber += 1;

                if (todayWeekdayNumber < 6) currentDayInMonth += 1;
            }

            result.push(week);

            currentDayInMonth += 1;
        }

        console.log(result);

        this.shortWeekdays = result;
    }

    private prevMonth(): void {
        if (this.currentMonthNumber > 0 && this.currentMonthNumber <= 11) {
            this.currentMonthNumber -= 1;
        } else if (this.currentMonthNumber === 0) {
            this.currentMonthNumber = 11;
            this.currentYear -= 1;
        }

        this.currentMonth = this.months[this.currentMonthNumber];
    }

    private nextMonth(): void {
        if (this.currentMonthNumber >= 0 && this.currentMonthNumber < 11) {
            this.currentMonthNumber += 1;
        } else if (this.currentMonthNumber === 11) {
            this.currentMonthNumber = 0;
            this.currentYear += 1;
        }

        this.currentMonth = this.months[this.currentMonthNumber];
    }

    private isActive = false;

    private selectDate(day: number, dayOfWeek: number): void {
        console.log('Число  = ', day);
        console.log('Номер дня недели = ', dayOfWeek);

        // this.isActive = true;
    }

    private monthsVisible = false;

    private showMonths(): void {
        this.monthsVisible = true;
    }

    private selectedMonth = '';

    private selectMonth(month: string) {
        this.selectedMonth = month;

        this.monthsVisible = false;
    }

    private yearsVisible = false;

    private showYears(): void {
        this.yearsVisible = true;
    }

    get years() {
        const result: number[] = [];

        let minYear = 1920;
        const maxYear = 2120;

        for (; minYear <= maxYear; minYear += 1) {
            result.push(minYear);
        }

        return result;
    }

    private selectedYear = 0;

    private selectYear(year: number): void {
        this.selectedYear = year;

        this.yearsVisible = false;
    }

    mounted() {
        this.calculateMonthDays();
    }
}
</script>
