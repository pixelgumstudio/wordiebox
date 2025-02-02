import { FC } from 'react';
import moment from 'moment';

type Click = {
  _id: string;
  product: string;
  website: string;
  count: number;
  timestamp: string;
};

const fetchClicks = async (): Promise<Click[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/clicks`, {
    cache: 'no-store', // Prevent caching for real-time data
  });
  if (!res.ok) throw new Error('Failed to fetch clicks');
  return res.json();
};

const ClicksPage: FC = async () => {
  const clicks = await fetchClicks();

  return (
    <div>
      <h1>Click Analysis</h1>
      <ul>
        {clicks.map((click) => (
          <li key={click._id}>
            <strong>Product: </strong> {click.product} | <strong>Website: </strong> {click.website} |{' '}
            <strong>Count: </strong> {click.count} | <strong>Timestamp: </strong>
            {moment(click.timestamp).format("dddd, MMMM DD, YYYY")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClicksPage;
