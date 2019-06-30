import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import FindPsd from './FindPsd';
import News from './News';
import Audio from './Audio';
import Map from './Map';
import Picture from './Picture';
import Video from './Video';
import BigMap from './BigMap';
import Schooloverview from './Schooloverview';
import Teacherteam from './Teacherteam';
import Campusactivities from './Campusactivities';
import Windowofparty from './Windowofparty';
import Schoolhonor from './Schoolhonor';
import Campusstar from './Campusstar';
import SchoolSceneryDetail from './SchoolSceneryDetail';
import ArticleDetail from './ArticleDetail';
import Teacherdetail from './Teacherdetail';
import ActiveDetail from './ActiveDetail';
import HonorDetail from './HonorDetail';
import SchoolStarDetail from './SchoolStarDetail';
import Bookdetail from './Bookdetail';
import Videodetail from './Videodetail';
import BookExe from './BookExe';
import Record from './Record';
import Teacher from './Teacher';
import Parent from './Parent';
import Studentmenu from './Studentmenu';
import Message from './Message';
import Favbook from './Favbook';
import Setting from './Setting';
import ClassList from './ClassList';
import TestList from './TestList';
import Management from './Management';
import Mychildren from './Mychildren';
import AbleExam from './AbleExam';
import JoinExam from './JoinExam';
import KonwPoint from './KonwPoint';
import LearnLog from './LearnLog';
import ErrExam from './ErrExam';
import ExamCollect from './ExamCollect';
import TodayTask from './TodayTask';
import MessageDetail from './MessageDetail';
import ResetPsd from './ResetPsd';
import Feedback from './Feedback';
import Score from './Score';
import Policy from './Policy';
import Clause from './Clause';
import AboutUs from './AboutUs';
import Addmessage from './Addmessage';
import StudentList from './StudentList';
import WorkList from './WorkList';
import Studentindex from './Studentindex';
import ClassChart from './ClassChart';
import TestDetail1 from './TestDetail1';
import PaperWork from './PaperWork';
import StuPageOverview from './StuPageOverview';
import Answer1 from './Answer1';
import Answer2 from './Answer2';
import Answer3 from './Answer3';
import Answer4 from './Answer4';
import HandPainted5 from './HandPainted5';
import HandInput from './HandInput';
import TestAll6 from './TestAll6';
import StuPaperOverview from './StuPaperOverview';
import TestDetail2 from './TestDetail2';
import ReductionTopic from './ReductionTopic';
import TestPractice from './TestPractice';
import AnswerRecord from './AnswerRecord';
import Order from './Order';
import AddOrder from './AddOrder';
import NewsDetail from './NewsDetail';
import AlreadyOrder from './AlreadyOrder';
import UnOrder from './UnOrder';
import Unit from './Unit';
import ClassTestCount from './ClassTestCount';
import ClassTestOverview from './ClassTestOverview';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import HandAnswer from './HandAnswer';
import Test6 from './Test6';
import BigTest from './BigTest';
const SwitchPage=()=>(
    <Router>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/findpsd" component={FindPsd}/>
            <Route path="/news" component={News}/>
            <Route path="/audio" component={Audio}/>
            <Route path="/map" component={Map}/>
            <Route path="/picture" component={Picture}/>
            <Route path="/video" component={Video}/>
            <Route path="/bigmap" component={BigMap}/>
            <Route path="/schooloverview" component={Schooloverview}/>
            <Route path="/teacherteam" component={Teacherteam}/>
            <Route path="/campusactivities" component={Campusactivities}/>
            <Route path="/windowofparty" component={Windowofparty}/>
            <Route path="/schoolhonor" component={Schoolhonor}/>
            <Route path="/campusstar" component={Campusstar}/>
            <Route path="/schoolscenerydetail" component={SchoolSceneryDetail}/>
            <Route path="/articledetail" component={ArticleDetail}/>
            <Route path="/teacherdetail" component={Teacherdetail}/>
            <Route path="/activedetail" component={ActiveDetail}/>
            <Route path="/honordetail" component={HonorDetail}/>
            <Route path="/schoolstardetail" component={SchoolStarDetail}/>
            <Route path="/bookdetail" component={Bookdetail}/>
            <Route path="/videodetail" component={Videodetail}/>
            <Route path="/bookexe" component={BookExe}/>
            <Route path="/record" component={Record}/>
            <Route path="/teacher" component={Teacher}/>
            <Route path="/parent" component={Parent}/>
            <Route path="/studentmenu" component={Studentmenu}/>
            <Route path="/message" component={Message}/>
            <Route path="/favbook" component={Favbook}/>
            <Route path="/setting" component={Setting}/>
            <Route path="/classlist" component={ClassList}/>
            <Route path="/testlist" component={TestList}/>
            <Route path="/management" component={Management}/>
            <Route path="/mychildren" component={Mychildren}/>
            <Route path="/ableexam" component={AbleExam}/>
            <Route path="/joinexam" component={JoinExam}/>
            <Route path="/todaytask" component={TodayTask}/>
            <Route path="/konwpoint" component={KonwPoint}/>
            <Route path="/learnlog" component={LearnLog}/>
            <Route path="/errexam" component={ErrExam}/>
            <Route path="/examcollect" component={ExamCollect}/>
            <Route path="/messagedetail" component={MessageDetail}/>
            <Route path="/addmessage" component={Addmessage}/>
            <Route path="/resetpsd" component={ResetPsd}/>
            <Route path="/feedback" component={Feedback}/>
            <Route path="/score" component={Score}/>
            <Route path="/policy" component={Policy}/>
            <Route path="/clause" component={Clause}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path="/studentlist" component={StudentList}/>
            <Route path="/worklist" component={WorkList}/>
            <Route path="/studentindex" component={Studentindex}/>
            <Route path="/classchart" component={ClassChart}/>
            <Route path="/testdetail1" component={TestDetail1}/>
            <Route path="/paperwork" component={PaperWork}/>
            <Route path="/stupageoverview" component={StuPageOverview}/>
            <Route path="/answer1" component={Answer1}/>
            <Route path="/answer2" component={Answer2}/>
            <Route path="/answer3" component={Answer3}/>
            <Route path="/answer4" component={Answer4}/>
            <Route path="/handpainted5" component={HandPainted5}/>
            <Route path="/handinput" component={HandInput}/>
            <Route path="/testall6" component={TestAll6}/>
            <Route path="/stupaperoverview" component={StuPaperOverview}/>
            <Route path="/testdetail2" component={TestDetail2}/>
            <Route path="/reductiontopic" component={ReductionTopic}/>
            <Route path="/testpractice" component={TestPractice}/>
            <Route path="/answerrecord" component={AnswerRecord}/>
            <Route path="/order" component={Order}/>
            <Route path="/addorder" component={AddOrder}/>
            <Route path="/newsdetail" component={NewsDetail}/>
            <Route path="/alreadyorder" component={AlreadyOrder}/>
            <Route path="/unorder" component={UnOrder}/>
            <Route path="/unit" component={Unit}/>
            <Route path="/classtestcount" component={ClassTestCount}/>
            <Route path="/classtestoverview" component={ClassTestOverview}/>
            <Route path="/test1" component={Test1}/>
            <Route path="/test2" component={Test2}/>
            <Route path="/test3" component={Test3}/>
            <Route path="/test4" component={Test4}/>
            <Route path="/test5" component={Test5}/>
            <Route path="/handanswer" component={HandAnswer}/>
            <Route path="/test6" component={Test6}/>
            <Route path="/bigtest" component={BigTest}/>
            <Redirect from="/" to="/news"/>
        </Switch>
    </Router>
)

export default SwitchPage