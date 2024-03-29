import { Fragment } from 'react'; // -------- icons -------- //
import Link from 'next/link';
import Puzzle from 'icons/solid-mono/Puzzle';
import Compare from 'icons/solid-mono/Compare';
import VideoCall from 'icons/solid-mono/VideoCall';
import Image from 'next/image';

const listOG = [
  'ADHD',
  'Anxiety',
  'Binge',
  'Eating Disorder',
  'Bipolar Disorder',
  'Depression',
  'Difficult Life Transitions and Adjustments',
  'Insomnia',
  'Panic disorder',
  'Postpartum Anxiety',
  'Postpartum Depression',
  'Postpartum Rage',
  'PTSD',
  'Substance Overuse/Abuse (we cannot treat active withdraw)',
  'Weight Gain/Obesity'
];
const list1 = ['ADHD', 'Anxiety', 'Binge', 'Eating Disorder', 'Bipolar Disorder'];
const list2 = [
  'Depression',
  'Difficult Life Transitions and Adjustments',
  'Insomnia',
  'Panic disorder',
  'Postpartum Anxiety'
];
const list3 = [
  'Postpartum Depression',
  'Postpartum Rage',
  'PTSD',
  'Substance Overuse/Abuse (we cannot treat active withdraw)',
  'Weight Gain/Obesity'
];

const Services22 = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="mb-10 px-xl-10 px-xxl-15">
            Our Services are <span className="underline-3 style-2 yellow">Inclusive</span> and in a Safe Environment
          </h2>
        </div>
      </div>
      <div className="row ">
        <h2>What we Treat</h2>
        {/* <ul className=" d-flex justify-content-between flex-lg-row flex-column mt-6">
          {listOG.map((item) => (
            <li key={item}>
              <i className="uil uil-check" />
              {item}
            </li>
          ))}
        </ul> */}
        <div className="col-lg-4">
          <ul className="icon-list bullet-bg bullet-soft-primary">
            {list1.map((item) => (
              <li key={item}>
                <i className="uil uil-check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-4">
          <ul className="icon-list bullet-bg bullet-soft-primary">
            {list2.map((item) => (
              <li key={item}>
                <i className="uil uil-check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-4">
          <ul className="icon-list bullet-bg bullet-soft-primary">
            {list3.map((item) => (
              <li key={item}>
                <i className="uil uil-check" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h2>Services</h2>
      <ul
        role="tablist"
        className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column mt-6"
      >
        <li className="nav-item" role="presentation">
          <a
            role="tab"
            href="#tab2-1"
            data-bs-toggle="tab"
            aria-selected="true"
            className="nav-link d-flex flex-row active"
          >
            <div>
              <Compare />
            </div>
            <div>
              <h3 className="mb-1 h4">Medication Management</h3>
              <p>ADHD, Depression, Anxiety </p>
            </div>
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            role="tab"
            tabIndex={-1}
            href="#tab2-2"
            data-bs-toggle="tab"
            aria-selected="false"
            className="nav-link d-flex flex-row"
          >
            <div>
              <Puzzle />
            </div>
            <div>
              <h3 className="mb-1 h4">Lifestyle Coaching</h3>
              <p>Sleep, Nutrition, and Exercise</p>
            </div>
          </a>
        </li>

        <li className="nav-item" role="presentation">
          <a
            role="tab"
            tabIndex={-1}
            href="#tab2-3"
            data-bs-toggle="tab"
            aria-selected="false"
            className="nav-link d-flex flex-row"
          >
            <div>
              <VideoCall className="icon-svg-sm solid-mono text-green me-4" />
            </div>
            <div>
              <h3 className="mb-1 h4">Supportive Therapy</h3>
              <p>Problem/Solution Focused</p>
            </div>
          </a>
        </li>
      </ul>

      {/* ========== tab content ========== */}
      <div className="tab-content mt-6 mt-lg-8">
        <div className="tab-pane fade active show" id="tab2-1" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <figure className="rounded shadow-lg">
                <Image
                  src="/img/photos/medication610x410.webp"
                  width={500}
                  height={500}
                  alt="Medication"
                  priority={false}
                />
              </figure>
            </div>

            <List
              title="Medication Management"
              color="fuchsia"
              text="  After evaluation, together we will consider if medication is the next step you need to take. We will discuss
        options that would treat your target symptoms so you can make an informed decision on what feels best for you.
        If you are already taking medications, we can discuss continuing your medications. Please note, prescriptions
        are granted at provider's discretion."
            />
          </div>
        </div>

        <div className="tab-pane fade" id="tab2-2" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <figure className="rounded shadow-lg">
                <Image
                  src="/img/photos/coaching610x410.webp"
                  width={500}
                  height={500}
                  alt="Coaching"
                  priority={false}
                />
              </figure>
            </div>

            <List
              title="Lifestyle Coaching"
              color="violet"
              text="It's true that a healthy lifestyle impacts both mental and physical health, therefore it's imperative we discuss what you are doing or could do better to naturally help your mental health.  
Things of focus are typically nutrition, exercise, sleep, substance use, etc. "
            />
          </div>
        </div>

        <div className="tab-pane fade" id="tab2-3" role="tabpanel">
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6">
              <figure className="rounded shadow-lg">
                <Image
                  src="/img/photos/support610x410.webp"
                  width={500}
                  height={500}
                  alt="Support Therapy"
                  priority={false}
                />
              </figure>
            </div>

            <List
              title="Supportive Therapy"
              color="green"
              text="We provide brief therapy and will discuss coping mechanisms during your visit."
            />
          </div>
        </div>
      </div>
      {/* <hr className="my-8" /> */}
      {/* <div className="row">
        <div className="col-md-10 col-lg-8 mt-6">
          <p>
            Evaluations are for treatment purposes only. <br /> We are an outpatient treatment facility, we DO NOT offer
            crisis support. <br />
            In case of an emergency, please call 911, call suicide hotline (988),
            <br />
            or go to nearest Emergency Department.{' '}
          </p>
        </div>
      </div> */}
    </Fragment>
  );
};

const List = ({ color, title, text }) => {
  return (
    <div className="col-lg-6">
      <h3 className="mb-3">{title}</h3>
      <p>{text}</p>
      <div style={{ marginBottom: '15px' }}>
        <Link
          target="_blank"
          href="https://ezmindpsychcare.intakeq.com/booking"
          className="btn btn-sm btn-primary rounded"
          rel="noopener noreferrer"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Services22;
