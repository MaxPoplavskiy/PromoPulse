import { SocialMediaCard } from "./components/social-media-card";

import Sofia from '../../assets/images/407224620_893420559116604_8936711427757346525_n.jfif';

import { PiTiktokLogo } from "react-icons/pi";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

import styles from './styles.module.scss';
import Chart from "react-google-charts";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

const data = [
  ["Year", "Views"],
  ["2004", 1000],
  ["2005", 1170],
  ["2006", 660],
  ["2007", 1030],
];

const options = {
  title: "Views",
  curveType: "function",
  legend: { position: "bottom" },
};

export function StatisticPage() {
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
          <SocialMediaCard Icon={PiTiktokLogo} image={Sofia} comments="10" likes="50" AIRating="10/10" />
          <SocialMediaCard Icon={SiInstagram} image={Sofia} comments="3" likes="51" AIRating="10/10"/>
          <SocialMediaCard Icon={FaXTwitter} image={Sofia} comments="3" likes="52" AIRating="10/10"/>
      </section>
    <Footer />
    </>
  )
}
