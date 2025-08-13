import {describe, expect, it} from '@jest/globals'
import i18next from 'i18next'

describe('dates', () => {

    i18next.init({
        lng: 'en', // if you're using a language detector, do not define the lng option
        debug: false,
        resources: {
            de: {
                translation: {
                    "Hello world!": "Hallo Welt!",
                    "at {{orderDate}}": "am {{orderDate}}",
                    "at {{orderDate, datetime}}": "am {{orderDate, datetime}}"
                }
            }
        }
    });
    const t = i18next.getFixedT('de')

    it('intl date time', () => {
        const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 42));

        const intlOptions: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
            timeZone: "Europe/Berlin",
        }
        const actual = new Intl.DateTimeFormat("de-DE", intlOptions).format(date)
        expect(actual).toBe("20.12.2012, 04:00:42")
    })

    it('i18next datetime', () => {
        const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 42));
        const formatParams: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }
        const actual = t('at {{orderDate, datetime}}', {orderDate: date, formatParams: {orderDate: formatParams}})
        expect(actual).toBe("am 20.12.2012, 04:00:42")
    })

    it('i18next preformatted', () => {
        const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 42));
        const formattedDate = date.toLocaleString('de')

        const actual = t('at {{orderDate}}', {orderDate: formattedDate})
        expect(actual).toBe("am 20.12.2012, 04:00:42")

    })

})
