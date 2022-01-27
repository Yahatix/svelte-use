import { writable } from "svelte/store"
import { browser } from '$app/env';

export const createGeolocationStore = (customOnEvent?: PositionCallback, onError?: PositionErrorCallback, options?: PositionOptions) => {
    const { subscribe, set } = writable<GeolocationPosition>();

    const onEvent: PositionCallback = (e: GeolocationPosition) => {
        if (customOnEvent) {
            customOnEvent(e)
            return
        }
        set({
            coords: {
                accuracy: e.coords.accuracy,
                altitude: e.coords.altitude,
                altitudeAccuracy: e.coords.altitudeAccuracy,
                heading: e.coords.heading,
                latitude: e.coords.latitude,
                longitude: e.coords.longitude,
                speed: e.coords.speed,
            },
            timestamp: e.timestamp
        })
    }

    if (browser) {
        navigator.geolocation.getCurrentPosition(onEvent, onError, options)
    }

    return {
        subscribe
    }
}

export const geolocation = createGeolocationStore()