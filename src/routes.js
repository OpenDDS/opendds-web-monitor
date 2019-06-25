import Dashboard from "./Dashboard";
import DataWriterSection from "./DataWriterSection";
import DataReaderSection from "./DataReaderSection";
import TopicSection from "./TopicSection";
import PublisherSection from "./PublisherSection";
import SubscriberSection from "./SubscriberSection";
import ViewTopic from "./ViewTopic";
import ViewPublisher from "./ViewPublisher";
import ViewSubcriber from "./ViewSubcriber";

export const routes = [
  { path: '/', component: Dashboard},
  { path: '/topics', component: TopicSection},
  { path: '/topics/:topicId', name: 'viewTopic', component: ViewTopic},
  { path: '/datawriters', component: DataWriterSection},
  { path: '/datareaders', component: DataReaderSection},
  { path: '/publishers', component: PublisherSection},
  { path: '/publishers/:publisherId', name: 'viewPublisher', component: ViewPublisher},
  { path: '/subscribers', component: SubscriberSection},
  { path: '/subscribers/:subscriberId', name: 'viewSubscriber', component: ViewSubcriber},
  { path: '*', component: { template: `<h1>Page Not Found</h1>`} }
];
