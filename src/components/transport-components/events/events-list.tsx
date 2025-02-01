import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material';

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'YOUR_API_KEY';  // Замени на свой API ключ
  const citySlug = 'kazan';  // Город, для которого ты хочешь получить события

  // Функция для получения данных
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`https://kudago.com/public-api/v1.4/events/?city=${citySlug}`, {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        });
        setEvents(response.data.results);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchEvents();
  }, [apiKey, citySlug]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Ошибка загрузки данных</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {events.map((event) => (
        <Grid item xs={12} sm={6} md={4} key={event.id}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {event.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" paragraph>
                {event.description ? event.description : 'Описание отсутствует'}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {new Date(event.start_date).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EventsList;
