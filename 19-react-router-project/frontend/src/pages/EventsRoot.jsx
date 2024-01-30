import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation.jsx';

export default function EventsRoot() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
