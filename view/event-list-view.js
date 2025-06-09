import AbstractView from './abstract-view.js';

const createEventListTemplate = () => `
  <ul class="trip-events__list"></ul>Add commentMore actions
`;

export default class EventList extends AbstractView {
  getTemplate() {
    return createEventListTemplate();
  }
}
