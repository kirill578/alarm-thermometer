import React, { useEffect } from 'react';
import { Box, CircularProgress, Paper } from '@material-ui/core'
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  ZoomAndPan,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { string } from 'prop-types';
import { ValueScale } from '@devexpress/dx-react-chart';

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

function getMsSinceMidnight(d: number) {
  var e = new Date(d);
  return d - e.setHours(0, 0, 0, 0);
}

function timeConvert(n: number) {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + ":" + rminutes;
}

const Label = (symbol: string) => (props: any) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={text + symbol}
    />
  );
};

const toCustomLocaleString = (date: Date) =>
  date
      .toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit'
      })
      .replace(/:00/, '');

const urlForGet = 'https://js-api-bin.herokuapp.com/api/listen-receive-storm/db'; // window.location.search.substr(1);

export const App = () => {
  const [data, setData] = React.useState<Record<string, string>[]>([]);

  useEffect(() => {
    const load = async () => {
      const fetched = await fetch(urlForGet);
      const data: Record<string, string>[] = Object.entries((await fetched.json() as Record<string, string>)).map(([key, value]) => ({
        timestamp: key,
        temp: value, //parseFloat(value),
      }));
      setData(data);
    };
    load();
  }, [setData])

  console.log(data);

  return (
    <Box position="absolute" left={0} top={0} right={0} bottom={0}>
      {data ?
        <Chart data={data}>
          <Legend
          />

          <ValueScale name="c" />

          <ArgumentAxis tickFormat={() => (ms: string) => {
            return toCustomLocaleString(new Date(ms));
          }} />
          <ValueAxis
            scaleName="c"
            labelComponent={Label(' C')}
          />

          <LineSeries scaleName="c" name="temp" valueField="temp" argumentField={"timestamp"} />

          <ZoomAndPan />
        </Chart>
        : <CircularProgress />}
    </Box>
  );
}
