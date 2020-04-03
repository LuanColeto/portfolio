import React, {Component} from 'react';
import './Projects.css';
import $ from 'jquery';

class Projects extends Component{
    render() {
        return(
            <div  id="projects-section">
                <div className="container">
                    <div className="projects col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1 id="project-title">Projetos</h1>
                    </div> <br/>
                    <div align="center">
                        <button className="btn btn-default filter-button primary-button" id="web-button" data-filter="web">Web</button>
                        <button className="btn btn-default filter-button primary-button" id="mobile-button" data-filter="mobile">Mobile</button>
                        <button className="btn btn-default filter-button primary-button" id="desktop-button" data-filter="desktop">Desktop</button>
                    </div> <br/>

                    <div align="center">
                        <button className="btn btn-default filter-button secundary-button web-button filter web react node php" id="react-button" data-filter="react">React</button>
                        <button className="btn btn-default filter-button secundary-button web-button filter web react node php" id="node-button" data-filter="node">Node</button>
                        <button className="btn btn-default filter-button secundary-button web-button filter web react node php" id="php-button" data-filter="php">PHP</button>
                        <button className="btn btn-default filter-button secundary-button mobile-button filter mobile swift react-native flutter" id="swift-button" data-filter="swift">Swift</button>
                        <button className="btn btn-default filter-button secundary-button mobile-button filter mobile swift react-native flutter" id="react-native-button" data-filter="react-native">React Native</button>
                        <button className="btn btn-default filter-button secundary-button mobile-button filter mobile swift react-native flutter" id="flutter-button" data-filter="flutter">Flutter</button>
                        <button className="btn btn-default filter-button secundary-button desktop-button filter desktop javascript-desktop" id="javascript-desktop-button" data-filter="javascript-desktop">Javascript</button>

                    </div> <br/>

                    <div className="row">

                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 filter react">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="img-responsive react-project" />
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4 port-image col-xs-6 filter react">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="img-responsive react-project" />
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4 port-image col-xs-6 filter react">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"  className="img-responsive react-project" />
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4 port-image  col-xs-6 filter php">
                            <img src="https://img2.gratispng.com/20180904/xhu/kisspng-logo-image-computer-icons-php-portable-network-gra-william-davies-meng-mongodb-5b8e9698822d99.0636011515360713205332.jpg" className="img-responsive php-project" />
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 port-image filter node">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" className="img-responsive node-project" />
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 port-image filter swift">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/667px-Swift_logo.svg.png" className="img-responsive swift-project"/>
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 port-image filter swift">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/667px-Swift_logo.svg.png" className="img-responsive swift-project"/>
                          </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 port-image filter react-native">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="img-responsive react-native-project"/>
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 port-image filter flutter">
                            <img src="https://img1.gratispng.com/20180710/hul/kisspng-dart-programming-language-flutter-object-oriented-flutter-logo-5b454ed38607c1.934218061531268819549.jpg" className="img-responsive flutter-project" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        switch (value) {
            case 'web':
                $('#web-button').css({'background-color': '#133B57', 'color': '#fff'});
                $('#mobile-button').css({'background-color': '#fff', 'color': '#000'});
                $('#desktop-button').css({'background-color': '#fff', 'color': '#000'});
                $('.web-button').css({'visibility': 'visible'});
                break;
            case 'mobile':
                $('#mobile-button').css({'background-color': '#133B57', 'color': '#fff'});
                $('#desktop-button').css({'background-color': '#fff', 'color': '#000'});
                $('#web-button').css({'background-color': '#fff', 'color': '#000'});
                $('.mobile-button').css({'visibility': 'visible'});
                break;
            case 'desktop':
                $('#desktop-button').css({'background-color': '#133B57', 'color': '#fff'});
                $('#mobile-button').css({'background-color': '#fff', 'color': '#000'});
                $('#web-button').css({'background-color': '#fff', 'color': '#000'});
                $('.desktop-button').css({'visibility': 'visible'});
                break;
            case 'react':
                $('#react-button').css({'background-color': '#133B57', 'color': '#fff'});
                $('#node-button').css({'background-color': '#fff', 'color': '#000'});
                $('#php-button').css({'background-color': '#fff', 'color': '#000'});
                break;
            case 'node':
                $('#node-button').css({'background-color': '#133B57', 'color': '#fff'});
                $('#react-button').css({'background-color': '#fff', 'color': '#000'});
                $('#php-button').css({'background-color': '#fff', 'color': '#000'});
                break;
            case 'php':
                $('#php-button').css({'background-color': '#133B57', 'color': '#fff'});
                $('#node-button').css({'background-color': '#fff', 'color': '#000'});
                $('#react-button').css({'background-color': '#fff', 'color': '#000'});
                break;
            case 'swift':
                $('#swift-button').css({'background-color': '#133B57', 'color': '#fff'});
                $('#react-native-button').css({'background-color': '#fff', 'color': '#000'});
                $('#flutter-button').css({'background-color': '#fff', 'color': '#000'});
                break;
            case 'react-native':
                $('#react-native-button').css({'background-color': '#133B57', 'color': '#fff'});
                $('#swift-button').css({'background-color': '#fff', 'color': '#000'});
                $('#flutter-button').css({'background-color': '#fff', 'color': '#000'});
                break;
            case 'flutter':
                $('#flutter-button').css({'background-color': '#133B57', 'color': '#fff'});
                $('#swift-button').css({'background-color': '#fff', 'color': '#000'});
                $('#react-native-button').css({'background-color': '#fff', 'color': '#000'});
                break;
            case 'javascript-desktop':
                $('#javascript-desktop-button').css({'background-color': '#133B57', 'color': '#fff'});
                break;

        }



        if (value == "hide") {
            //$('.filter').removeClass('hidden');
            $('.filter').hide('1000');

        }
        else {

//                $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//                $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $(".filter").filter('.'+value).show('3000');
        }

    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }

});

export default Projects;
