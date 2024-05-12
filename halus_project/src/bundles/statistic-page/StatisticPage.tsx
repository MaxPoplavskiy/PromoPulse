import { SocialMediaCard } from "./components/social-media-card";
import woman1 from '../../assets/images/woman-1.jpg';
import { PiTiktokLogo } from "react-icons/pi";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import styles from './styles.module.css';
import Chart from "react-google-charts";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { useEffect, useState } from "react";


const options = {
  title: "Views",
  curveType: "function",
  legend: { position: "bottom" },
};

export function StatisticPage() {
  const [data, setData] = useState<[number | string, number | string][]>([["Year", "Views"]]);

  useEffect(() => {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1)

    const today = new Date();

    while (date <= today) {
      const dateString = date.toLocaleString('en-US', { month: 'short', year: 'numeric' });

      setData(d => [...d, [dateString, 10000 * Math.random()]])
      date.setMonth(date.getMonth() + 1);
    }
  }, [])
  return (<>
  <Header />
      <section className={styles.statistics_page__statistics_container}>
        <div className={styles.statistics_page__chart_container}>
          <h1 className={styles.statistics_page__statistics_title}>Statistics</h1>
          <div className={styles.statistics_page__line_charts_container}>
            <div className={styles.statistics_page__line_chart_container}>
              <Chart
                className={styles.statistics_page__chart}
                chartType="LineChart"
                height="334px"
                data={data}
                options={options}
              />
            </div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar className={styles.statistics_page__calendar} />
            </LocalizationProvider>
          </div>
        </div>
      </section>

      <section className={styles.statistics_page__social_media_container}>
          <SocialMediaCard Icon={PiTiktokLogo} image={woman1} comments="10" likes="50" AIRating="10/10" />
          <SocialMediaCard Icon={SiInstagram} image={woman1} comments="3" likes="51" AIRating="10/10"/>
          <SocialMediaCard Icon={FaXTwitter} image={woman1} comments="3" likes="52" AIRating="10/10"/>
      </section>
    <Footer />
    </>
  )
}
