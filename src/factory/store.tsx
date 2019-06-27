import React from 'react';
import produce from 'immer';
import useGlobalHook from 'use-global-hook';
import { DateTime } from 'luxon';
import { Places } from '../places';
import mockPlaces from '../mock/mockPlaces';

type DateData = {
	hour?: number;
	minute?: number;
	day?: number;
	dateTime?: DateTime;
};

type GlobalState = {
	date: DateData;
	places: Places;
};

type GlobalActions = {
	setDate: (newDate: DateData) => void;
};

const initDate = DateTime.local().setZone('America/New_York');

// global state
const state: GlobalState = {
	date: {
		hour: initDate.hour,
		minute: initDate.minute,
		day: initDate.day,
		dateTime: initDate,
	},
	places: mockPlaces
};

// global actions
const globalActions = {
	setDate: (store, newDate: DateData) => {
		store.setState(
			produce(store.state, (draft: GlobalState) => {
				draft.date = {
					...draft.date,
					...newDate,
				};
			})
		);
	},
};

// set up hook for global state management
const useGlobal: () => [GlobalState, GlobalActions] = useGlobalHook(
	React,
	state,
	globalActions
);

export default useGlobal;
