export type Project = {
  title: string
  link?: string
  description: string
  features?: string[]
  tech: string[]
}

export const PROJECTS: Project[] = [
  {
    title: 'Space-Grown: Empowering Farmers with Satellite Intelligence',
    link: 'https://github.com/TEJASKUMAR-REDDY-J/Space-Grown-Empowering-Farmers-to-Grow-Exotic-Fruits-with-Geographic-Insights',
    description: 'Precision agriculture platform using satellite imagery, weather APIs, and ML scoring to help farmers cultivate exotic fruits.',
    features: [
      'NDVI vegetation analysis',
      'Real-time weather integration',
      'Comprehensive environmental scoring system',
      'Image segmentation for land classification',
      'LLM-powered personalized agricultural advice',
    ],
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Weather APIs', 'GPT-Neo', 'Matplotlib'],
  },
  {
    title: 'GeoGenesis: Autonomous 3D Environmental Mapping',
    link: 'https://github.com/TEJASKUMAR-REDDY-J/GeoGenesis',
    description: 'Drone swarm-based SLAM system for generating detailed 3D geographical models in challenging environments.',
    features: [
      'ORB-SLAM3 with ROS2 Navigation2',
      'Reinforcement Learning for exploration',
      'LangChain + AutoGPT for decision-making',
      'Real-time visualizations with RViz and Plotly',
    ],
  tech: ['Python', 'Genesis-World', 'Mast3r SLAM', 'TensorFlow Agents', 'PyTorch RL'],
  },
  {
    title: 'GramSetuAI: AI-Powered Microfinance for Rural India',
    link: 'https://github.com/TEJASKUMAR-REDDY-J/GramSetuAI',
    description: 'Multi-agent AI platform with multilingual voice, credit scoring, and financial literacy modules for Karnataka.',
    features: [
      'Specialized AI agents for onboarding, scoring, education',
      'GROQ-powered VLM for OCR and document processing',
      '90.5% accurate credit scoring engine',
      'Cultural and linguistic adaptation for rural communities',
    ],
    tech: ['Python', 'LangChain', 'Gradio', 'GROQ LLM', 'gTTS', 'Deep Neural Networks'],
  },
  {
    title: 'Comparative Analysis of Leukemia Classification Based on Activation Functions',
    link: '[PLACEHOLDER_RESEARCH_PAPER_URL]',
    description: 'Research-grade comparison of CNN activation functions for acute leukemia detection using blood smear and bone marrow imagery.',
    features: [
      'Comparison of ReLU, GELU, SELU, Mish, Softplus, and Softsign',
      'Tested across VGG, ResNet, and InceptionV3 architectures',
      'Performance metrics: accuracy, precision, recall, F1-score',
    ],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN architectures'],
  },
]

export const DATASETS: { title: string; summary: string }[] = [
  {
    title: 'Constitutional NLP — Indic (2 Languages)',
    summary: 'Custom NLP dataset focusing on constitutional topics across two Indic languages for domain-specific Q/A.',
  },
  {
    title: 'Rural Persona Questionnaire',
    summary: 'Survey-style dataset designed with multiple personas to elicit explainable, helpful answers for rural users.',
  },
  {
    title: 'Agentic Synthetic Collections',
    summary: 'Agentic Systems used to generate and refine data for niche use-cases when public datasets are unavailable.',
  },
]
