import {
  GET_TICKET,
  TICKET_ERROR,
  DELETE_TICKET,
  ADD_TICKET,
  GET_TICKETS,
  CLEAR_TICKETS,
  CLEAR_TICKET,
  QUOTE_TICKET,
  REMOVE_QUOTE,
  QUOTE_ERROR,
} from '../actions/types';

const initialState = {
  ticket: null,
  tickets: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TICKET:
      return {
        ...state,
        ticket: payload,
        loading: false,
      };

    case GET_TICKETS:
      return {
        ...state,
        tickets: payload,
        loading: false,
      };

    case ADD_TICKET:
      return {
        ...state,
        tickets: [...state.tickets, payload],
        loading: false,
      };
    case CLEAR_TICKETS:
      return {
        ticket: null,
        tickets: [],
        loading: true,
        error: {},
      };

    case CLEAR_TICKET:
      return {
        ...state,
        ticket: null,
        loading: false,
      };

    case DELETE_TICKET:
      return {
        ...state,
        tickets: state.tickets.filter((ticket) => ticket._id !== payload),
        loading: false,
      };
    case TICKET_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case QUOTE_TICKET:
      return {
        ...state,
        ticket: { ...state.ticket, quotes: payload },
        loading: false,
      };
    case REMOVE_QUOTE:
      return {
        ...state,
        ticket: {
          ...state.quote,
          quotes: state.ticket.quotes.filter((quote) => quote._id !== payload),
        },
        loading: false,
      };
    case QUOTE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
