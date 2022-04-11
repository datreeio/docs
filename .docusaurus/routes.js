
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','4f4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','6b2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','a27'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','442'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','dfe'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','867'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','222'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','8f9'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','925'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules',
        component: ComponentCreator('/built-in-rules','295'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/argo',
        component: ComponentCreator('/built-in-rules/argo','273'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/containers',
        component: ComponentCreator('/built-in-rules/containers','2a7'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/cronjob',
        component: ComponentCreator('/built-in-rules/cronjob','99a'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/deprecation',
        component: ComponentCreator('/built-in-rules/deprecation','17e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-application-and-appproject-are-part-of-the-argocd-namespace',
        component: ComponentCreator('/built-in-rules/ensure-application-and-appproject-are-part-of-the-argocd-namespace','d20'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-configmap-is-recognized-by-argocd',
        component: ComponentCreator('/built-in-rules/ensure-configmap-is-recognized-by-argocd','f6f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-cpu-limit',
        component: ComponentCreator('/built-in-rules/ensure-cpu-limit','db7'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-cpu-request',
        component: ComponentCreator('/built-in-rules/ensure-cpu-request','e66'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-cronjob-deadline',
        component: ComponentCreator('/built-in-rules/ensure-cronjob-deadline','1e7'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-cronjob-scheduler-valid',
        component: ComponentCreator('/built-in-rules/ensure-cronjob-scheduler-valid','91d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-digest-tag',
        component: ComponentCreator('/built-in-rules/ensure-digest-tag','157'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-env-label',
        component: ComponentCreator('/built-in-rules/ensure-env-label','0d9'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-hpa-maximum-replicas',
        component: ComponentCreator('/built-in-rules/ensure-hpa-maximum-replicas','7be'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-hpa-minimum-replicas',
        component: ComponentCreator('/built-in-rules/ensure-hpa-minimum-replicas','0cd'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-image-pinned-version',
        component: ComponentCreator('/built-in-rules/ensure-image-pinned-version','7e4'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-labels-value-valid',
        component: ComponentCreator('/built-in-rules/ensure-labels-value-valid','c2b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-liveness-probe',
        component: ComponentCreator('/built-in-rules/ensure-liveness-probe','452'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-memory-limit',
        component: ComponentCreator('/built-in-rules/ensure-memory-limit','740'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-memory-request',
        component: ComponentCreator('/built-in-rules/ensure-memory-request','a5d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-minimum-two-replicas',
        component: ComponentCreator('/built-in-rules/ensure-minimum-two-replicas','87b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-owner-label',
        component: ComponentCreator('/built-in-rules/ensure-owner-label','ded'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-readiness-probe',
        component: ComponentCreator('/built-in-rules/ensure-readiness-probe','d36'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-rollout-allows-broadcasting-ip-table-changes',
        component: ComponentCreator('/built-in-rules/ensure-rollout-allows-broadcasting-ip-table-changes','6bc'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-rollout-has-revision-history-set',
        component: ComponentCreator('/built-in-rules/ensure-rollout-has-revision-history-set','bfb'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-rollout-pause-step-has-a-configured-duration',
        component: ComponentCreator('/built-in-rules/ensure-rollout-pause-step-has-a-configured-duration','b8e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-rollout-that-is-marked-as-degraded-scales-down-replicaset',
        component: ComponentCreator('/built-in-rules/ensure-rollout-that-is-marked-as-degraded-scales-down-replicaset','f4f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-valid-restart-policy',
        component: ComponentCreator('/built-in-rules/ensure-valid-restart-policy','26f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-workflow-dag-fail-fast-on-node-failure',
        component: ComponentCreator('/built-in-rules/ensure-workflow-dag-fail-fast-on-node-failure','948'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/ensure-workflow-retry-policy-catches-relevant-errors-only',
        component: ComponentCreator('/built-in-rules/ensure-workflow-retry-policy-catches-relevant-errors-only','b3b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/networking',
        component: ComponentCreator('/built-in-rules/networking','cea'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/other',
        component: ComponentCreator('/built-in-rules/other','8d1'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-configmap-security-vulnerability-cve-2021-25742',
        component: ComponentCreator('/built-in-rules/prevent-configmap-security-vulnerability-cve-2021-25742','c7b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-container-security-vulnerability-cve-2021-25741',
        component: ComponentCreator('/built-in-rules/prevent-container-security-vulnerability-cve-2021-25741','d2e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-cronjob-concurrency',
        component: ComponentCreator('/built-in-rules/prevent-cronjob-concurrency','dd3'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-deafult-namespce',
        component: ComponentCreator('/built-in-rules/prevent-deafult-namespce','9be'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-deprecated-k8s-api-116',
        component: ComponentCreator('/built-in-rules/prevent-deprecated-k8s-api-116','871'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-deprecated-k8s-api-117',
        component: ComponentCreator('/built-in-rules/prevent-deprecated-k8s-api-117','dd2'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-endpointslice-validation-from-enabling-host-network-hijack-cve-2021-25737',
        component: ComponentCreator('/built-in-rules/prevent-endpointslice-validation-from-enabling-host-network-hijack-cve-2021-25737','5fb'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-ingress-forwarding-traffic-to-single-container',
        component: ComponentCreator('/built-in-rules/prevent-ingress-forwarding-traffic-to-single-container','485'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-ingress-security-vulnerability-cve-2021-25742',
        component: ComponentCreator('/built-in-rules/prevent-ingress-security-vulnerability-cve-2021-25742','2c7'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-mounting-docker-socket',
        component: ComponentCreator('/built-in-rules/prevent-mounting-docker-socket','a32'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-naked-pods',
        component: ComponentCreator('/built-in-rules/prevent-naked-pods','601'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-node-port',
        component: ComponentCreator('/built-in-rules/prevent-node-port','471'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-privileged-containers',
        component: ComponentCreator('/built-in-rules/prevent-privileged-containers','a8e'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-uid-conflicts',
        component: ComponentCreator('/built-in-rules/prevent-uid-conflicts','73b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-using-host-ipc',
        component: ComponentCreator('/built-in-rules/prevent-using-host-ipc','c86'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-using-host-network',
        component: ComponentCreator('/built-in-rules/prevent-using-host-network','b2f'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-using-host-pid',
        component: ComponentCreator('/built-in-rules/prevent-using-host-pid','2cb'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-workflow-from-having-an-empty-retry-strategy',
        component: ComponentCreator('/built-in-rules/prevent-workflow-from-having-an-empty-retry-strategy','745'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/prevent-workflow-pods-from-using-the-default-service-account',
        component: ComponentCreator('/built-in-rules/prevent-workflow-pods-from-using-the-default-service-account','91d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/security',
        component: ComponentCreator('/built-in-rules/security','0da'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/built-in-rules/workload',
        component: ComponentCreator('/built-in-rules/workload','71d'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/cicd-examples',
        component: ComponentCreator('/cicd-examples','133'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/cicd-examples/circle-ci',
        component: ComponentCreator('/cicd-examples/circle-ci','9ea'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/cicd-examples/gitLab-ci-cd',
        component: ComponentCreator('/cicd-examples/gitLab-ci-cd','35b'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/cicd-examples/jenkins-pipeline',
        component: ComponentCreator('/cicd-examples/jenkins-pipeline','f07'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/cicd-examples/travis-ci',
        component: ComponentCreator('/cicd-examples/travis-ci','d42'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/community-integrations',
        component: ComponentCreator('/community-integrations','831'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/custom-rules',
        component: ComponentCreator('/custom-rules','fb8'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/custom-rules/basic-examples',
        component: ComponentCreator('/custom-rules/basic-examples','a36'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/custom-rules/custom-rules-overview',
        component: ComponentCreator('/custom-rules/custom-rules-overview','ca1'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/custom-rules/multiple-property-paths',
        component: ComponentCreator('/custom-rules/multiple-property-paths','0a4'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/custom-rules/resource-quotas',
        component: ComponentCreator('/custom-rules/resource-quotas','718'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/faq',
        component: ComponentCreator('/faq','4b7'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations',
        component: ComponentCreator('/integrations','b4c'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/git-hooks',
        component: ComponentCreator('/integrations/git-hooks','3ff'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/kustomize-support',
        component: ComponentCreator('/integrations/kustomize-support','942'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/integrations/pre-commit-hook',
        component: ComponentCreator('/integrations/pre-commit-hook','3e3'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/setup/account-token',
        component: ComponentCreator('/setup/account-token','dbc'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/setup/centralized-policy',
        component: ComponentCreator('/setup/centralized-policy','7da'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/setup/cli-arguments',
        component: ComponentCreator('/setup/cli-arguments','0e0'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/setup/cli-output',
        component: ComponentCreator('/setup/cli-output','177'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/setup/history',
        component: ComponentCreator('/setup/history','bbc'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/setup/policy-as-code',
        component: ComponentCreator('/setup/policy-as-code','b97'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/setup/schema-validation',
        component: ComponentCreator('/setup/schema-validation','975'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/troubleshooting',
        component: ComponentCreator('/troubleshooting','2fc'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/welcom/overview',
        component: ComponentCreator('/welcom/overview','f11'),
        exact: true,
        sidebar: "sidebar"
      },
      {
        path: '/welcom/what-is-datree',
        component: ComponentCreator('/welcom/what-is-datree','be6'),
        exact: true,
        sidebar: "sidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
