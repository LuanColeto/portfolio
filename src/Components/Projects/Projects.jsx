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
                        <button className="btn btn-default filter-button primary-button" id="all" data-filter="all">Tudo</button>
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

                    <div className="row  col-md-12">


                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 filter react">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" align="middle" className="img-responsive react-project" />
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4 port-image col-xs-4 filter react">
                               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" align="middle" className="img-responsive react-project" />
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4 port-image col-xs-4 filter react">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" align="middle" className="img-responsive react-project" />
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4 port-image col-xs-4 filter react">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" align="middle" className="img-responsive react-project" />
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4 port-image col-xs-4 filter react">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" align="middle" className="img-responsive react-project" />
                        </div>


                        <div className="project col-lg-4 col-md-4 col-sm-4 port-image  col-xs-6 filter php">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="img-responsive php-project" />
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 port-image filter node">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="img-responsive node-project" />
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 port-image filter swift">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="img-responsive swift-project"/>
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 port-image filter swift">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="img-responsive swift-project"/>
                          </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 port-image filter react-native">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="img-responsive react-native-project"/>
                        </div>

                        <div className="project col-lg-4 col-md-4 col-sm-4  col-xs-6 port-image filter flutter">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="img-responsive flutter-project" />
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

        $('.web-button').css({'visibility': 'visible'});

        switch (value) {
            case 'all':
                $('#all').css({'background-color': '#133B57', 'color': '#fff'});
                $('#mobile-button').css({'background-color': '#fff', 'color': '#000'});
                $('#desktop-button').css({'background-color': '#fff', 'color': '#000'});
                $('#web-button').css({'background-color': '#fff', 'color': '#000'});
                $('.web-button').css({'visibility': 'hidden'});
                $('.mobile-button').css({'visibility': 'hidden'});
                $('.desktop-button').css({'visibility': 'hidden'});
                break;
            case 'web':
                $('#all').css({'background-color': '#fff', 'color': '#000'});
                $('#web-button').css({'background-color': '#133B57', 'color': '#fff'});
                $('#mobile-button').css({'background-color': '#fff', 'color': '#000'});
                $('#desktop-button').css({'background-color': '#fff', 'color': '#000'});
                $('.web-button').css({'visibility': 'visible'});
                break;
            case 'mobile':
                $('#all').css({'background-color': '#fff', 'color': '#000'});
                $('#mobile-button').css({'background-color': '#133B57', 'color': '#fff'});
                $('#desktop-button').css({'background-color': '#fff', 'color': '#000'});
                $('#web-button').css({'background-color': '#fff', 'color': '#000'});
                $('.mobile-button').css({'visibility': 'visible'});
                break;
            case 'desktop':
                $('#all').css({'background-color': '#fff', 'color': '#000'});
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

        if (value == "all") {
            $('.project').show('1000');
        }
        else {

            $(".filter").not('.'+value).hide('3000');
            $(".filter").filter('.'+value).show('3000');
        }



    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }

});

export default Projects;
