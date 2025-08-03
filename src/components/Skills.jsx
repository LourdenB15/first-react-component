import "../styles/reset.css";
import "../styles/styles.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";

function Skills() {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skills-list-wrapper">
                <div class="skills-list">
                    <div><img src={html} alt="html"/></div>
                    <div><img src={css} alt="css"/></div>
                    <div><img src={js} alt="javascript"/></div>
                    <div><img src={git} alt="html"/></div>
                    <div><img src={github} alt="css"/></div>
                    <div><img src={vscode} alt="javascript"/></div>
                </div>
            </div>
        </div>
    )
}

export default Skills;