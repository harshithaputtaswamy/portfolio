const publicationData = [
    {
        "title": "An N-step Look Ahead Algorithm Using Mixed (On and Off) Policy Reinforcement Learning",
        "published_at": "IEEE",
        "doi": "https://doi.org/10.1109/ICISS49785.2020.9315959",
        "authors": "Vivek Kuchibhotla., P Harshitha., Shobhit Goyal",
        "year": "2020",
        "description": [
            "In this paper, a new algorithm for reinforcement learning is proposed.",
            "Q-learning and SARSA are one of the most famous algorithms used in Reinforcement learning.",
            "Q-learning gives the most optimal path whereas SARSA gives the safest path.",
            "This paper proposes an algorithm that allows users to flexibly chose between safer or faster path in any given environment by altering the hyper parameter n.",
            "The approach taken to achieve this is N-step look ahead, the agent will update the initial states value after it has taken n steps using on-policy reinforcement learning and in adjacent step it applies off-policy RL.",
            "Using this technique, the algorithm overcomes the overestimation of value function prevalent in Q-learning as it emphasizes more on on-policy updates.",
            "This algorithm allows the user alter the dependency on bootstrapping and sampling in updating the value function."
        ]
    },
    {
        "title": " Combinatorial sleeping bandits with fairness constraints and long-term non-availability of arms",
        "published_at": "IEEE",
        "doi": "https://doi.org/10.1109/ICECA49313.2020.9297371",
        "authors": "Vivek Kuchibhotla., P Harshitha., Divitha Elugoti",
        "year": "2020",
        "description": [
            "In this paper, the situation of long term non-availability of arms in combinatorial sleeping bandits problem is analyzed.",
            "The multi-arm sleeping bandit's model along with fairness constraint is very widely used to model real world examples like a network switch.",
            "One common occurrence in such a scenario is long term non-availability, in such cases the queue length (in the Queuing techniques) grows rapidly causing system instability.",
            "The algorithm proposed in this paper deals with this problem and still maintain the regret bounds along with the queue fairness constraints.",
            "A better way of estimating the fairness that takes into account the long term non-availability of arms is also proposed.",
            "Extension of the UCB algorithm is used to deal with the exploration versus exploitation dilemma.",
            "Mathematical proofs for arriving at the regret bounds and feasibility optimality is given in the end."
        ]
    }
];

export default publicationData