import React from "react";
import EventItem from "../components/EventItem";
import { json, useRouteLoaderData } from "react-router-dom";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json({ message: "could not fetch details for event." }, { status: 500 });
  } else {
    return response;
  }
}
