class QuestionnaireCMS extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot
      .querySelector("form")
      .addEventListener("submit", this.handleSubmit.bind(this));
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Trebuchet MS', sans-serif;
          max-width: 800px;
          margin: auto;
          background-color: #0e1029;
          padding: .5rem 1rem;
        }

        h3 {
          font-size: 2rem;
          margin: .3rem 0 1rem;
          padding: 0;
          line-height: 1;
        }

        h4 {
          font-size: 1.5rem;
          margin: .3rem 0 1rem;
          padding: 0;
          line-height: 1;
        }

        .question {
          margin-bottom: 1rem;
          background-color: #1b1d39; 
          padding: 1rem;
          cursor: pointer;
          font-weight: bold;
        }

        .answer-group {
          font-size: 0.8rem;
          margin: 1rem 0;
          padding: 0 1rem;
          color: #94a3b8
        }

        label, .desc {
          display: block;
          color: #94a3b8;
          line-height: 1.8;
          font-weight: normal;
          font-size: 14px;
        }

        button {
          border: none;
          padding: .5rem 1rem;
          color: #1b1d39;
          background: #fff;
          font-weight: bold;
          font-size: 1.5rem;
          margin: 0 0 1rem 0;
          cursor: pointer;
        }

        button:hover {
          color: #fff;
          background: #1b1d39;
        }

        #result-content {
          background-color: #1b1d39; 
          padding: 1rem;
        }
      </style>
      <form>
        <h3>CMS Questionnaire</h3>
        <p class="desc">Open each question and select your preference. You have to fill out all questions.</p>
        ${this.renderQuestions()}
        <button type="submit">Submit</button>
      </form>
      <div id="result"></div>
    `;
  }

  renderQuestions() {
    const questions = [
      {
        question: "What is your primary need for a content editing system?",
        answers: [
          "Complex structured data editing with schema validation",
          "Simple editing with improvements over a side-by-side preview",
          "Edit-in-place with block-based visual editing - with design system guardrails",
          "Full visual design freedom like a designer",
        ],
      },
      {
        question:
          "Can a front-end SDK be used for instant updates or other advanced integrations?",
        answers: [
          "Yes, we can integrate SDKs",
          "Yes, we can integrate SDKs",
          "Yes, we can integrate SDKs",
          "No, we prefer a simpler setup",
        ],
      },
      {
        question:
          "How important is it for your editors to have a visually driven editing experience?",
        answers: [
          "Somewhat important",
          "Important but not critical",
          "Very important, with structured guardrails",
          "Extremely important, full freedom in design",
        ],
      },
      {
        question: "Do you need real-time preview updates as you edit content?",
        answers: [
          "Not necessary; updates on save are fine",
          "Yes, clicking elements should open corresponding CMS forms",
          "Yes, with WYSIWYG style editing and design system adherence",
          "Absolutely, with full WYSIWYG capabilities",
        ],
      },
      {
        question: "What is your primary focus regarding data?",
        answers: [
          "Clean and reusable domain-specific data",
          "Balanced domain and design data",
          "Design-focused but still within structured boundaries",
          "Purely design-related data with minimal focus on domain data or reusability",
        ],
      },
      {
        question: "How complex is your content and data governance?",
        answers: [
          "Highly complex with strict rules",
          "Some complexity, but manageable",
          "Moderate complexity with flexibility",
          "Simple, minimal governance needed",
        ],
      },
      {
        question: "What is your preferred implementation setup?",
        answers: [
          "CMS form fields next to a website preview",
          "Contextual live editing with pop-up forms or scroll to form section in CMS",
          "Structured block-based visual editing",
          "Designer-style WYSIWYG editing",
        ],
      },
      {
        question: "How many external systems do you plan to integrate?",
        answers: [
          "None or very few",
          "Some, but primarily using the CMS",
          "Several, with data mapping and managing APIs",
          "Mainly within the visual editing platform itself",
        ],
      },
    ];

    return questions
      .map(
        (q, index) => `
          <details class="question">
            <summary class="sum">${index + 1}. ${q.question}</summary>
            <div class="answer-group">
              ${q.answers
                .map(
                  (answer, i) => `
                <label>
                  <input type="radio" name="q${index}" value="${
                    i + 1
                  }" required>
                  ${answer}
                </label>`
                )
                .join("")}
            </div>
          </details>`
      )
      .join("");
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const score = Array.from(formData.values()).reduce(
      (sum, value) => sum + parseInt(value),
      0
    );
    const result = this.getResult(score);
    this.shadowRoot.getElementById("result").innerHTML = `
      <div class="result-content">
        <h4>Your Result</h4>
        <p class="desc">You can change your answers and re-submit the form.</p>
        <ul>
          <li>${result.category}</li>
          <li>${result.description}</li>
          <li>Suggested Vendors: ${result.vendors}</li>
        </ul>
      </div>
    `;
  }

  getResult(score) {
    if (score >= 8 && score <= 13) {
      return {
        category: "Category 1: Visual preview CMS",
        description:
          "Fill out forms and see updates side by side on your website. Best for editing domain data with validation.",
        vendors: "Contentstack, Directus, Amplience, Strapi",
      };
    } else if (score >= 14 && score <= 19) {
      return {
        category: "Category 2: Contextual live editing",
        description:
          "Click on elements on your site to open CMS forms for editing. Slightly more visually driven than side-by-side previews.",
        vendors: "Sanity, Storyblok, Kontent.ai",
      };
    } else if (score >= 20 && score <= 25) {
      return {
        category: "Category 3: Almost WYSIWYG edit-in-place",
        description:
          "Block-based visual editing within a design system. Combines WYSIWYG features with structured guardrails.",
        vendors:
          "Uniform, Contentful Studio, Sitecore, Builder.io, Plasmic, Netlify Create",
      };
    } else {
      return {
        category: "Category 4: Full WYSIWYG",
        description:
          "Design like a designer, with total visual freedom. Easy to start but hard to scale with a mix of design and domain data.",
        vendors: "Wix, Weweb, Webflow, Squarespace",
      };
    }
  }
}

customElements.define("questionnaire-cms", QuestionnaireCMS);
