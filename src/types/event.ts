export type Event = {
  id: string
  dateDay: number
  dateMonth: string
  eventLabel: string
  eventDetails: string
  eventTime: string
  eventTimezone: string
  eventType: 'SCRIM' | 'PRACTICE' | 'TOURNAMENT'
}