import uuid from "react-uuid";

export const navItems = [
  {
    label: "Container",
    href: "containers",
    pages: [
      {
        id: uuid(),
        title: "Ensure each container image has a pinned (tag) version",
        slug: "/built-in-rules/containers/ensure-image-pinned-version",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure each container has a configured memory request",
        slug: "/built-in-rules/containers/ensure-memory-request",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure each container has a configured CPU request",
        slug: "/built-in-rules/containers/ensure-cpu-request",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure each container has a configured memory limit",
        slug: "/built-in-rules/containers/ensure-memory-limit",
        isEnabledByDefault: true,
      },

      {
        id: uuid(),
        title: "Ensure each container has a configured CPU limit",
        slug: "/built-in-rules/containers/ensure-cpu-limit",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure each container has a configured liveness probe",
        slug: "/built-in-rules/containers/ensure-liveness-probe",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure each container has a configured readiness probe",
        slug: "/built-in-rules/containers/ensure-readiness-probe",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Prevent containers from having root access capabilities",
        slug: "/built-in-rules/containers/prevent-privileged-containers",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure each container image has a digest tag",
        slug: "/built-in-rules/containers/ensure-digest-tag",
        isEnabledByDefault: false,
      },
      {
        id: uuid(),
        title: "Prevent containers from sharing the host's PID namespace",
        slug: "/built-in-rules/containers/prevent-using-host-pid",
        isEnabledByDefault: false,
      },
      {
        id: uuid(),
        title: "Prevent containers from sharing the host's IPC namespace",
        slug: "/built-in-rules/containers/prevent-using-host-ipc",
        isEnabledByDefault: false,
      },
      {
        id: uuid(),
        title: "Prevent containers from sharing the host's network namespace",
        slug: "/built-in-rules/containers/prevent-using-host-network",
        isEnabledByDefault: false,
      },
      {
        id: uuid(),
        title:
          "Prevent containers from accessing host files by using high UIDs",
        slug: "/built-in-rules/containers/prevent-uid-conflicts",
        isEnabledByDefault: false,
      },
      {
        id: uuid(),
        title: "Prevent containers from mounting Docker socket",
        slug: "/built-in-rules/containers/prevent-mounting-docker-socket",
        isEnabledByDefault: false,
      },
    ],
  },
  {
    label: "Workload",
    href: "workload",
    pages: [
      {
        id: uuid(),
        title: "Ensure workload has valid label values",
        slug: "/built-in-rules/containers/ensure-labels-value-valid",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title:
          "Ensure deployment-like resource is using a valid restart policy",
        slug: "/built-in-rules/containers/ensure-valid-restart-policy",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Prevent workload from using the default namespace",
        slug: "/built-in-rules/containers/prevent-deafult-namespce",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure Deployment has more than one replica configured",
        slug: "/built-in-rules/containers/ensure-minimum-two-replicas",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: `Ensure workload has a configured "owner" label`,
        slug: "/built-in-rules/containers/ensure-owner-label",
        isEnabledByDefault: false,
      },
      {
        id: uuid(),
        title: `Ensure Deployment has a configured "env" label`,
        slug: "/built-in-rules/containers/ensure-env-label",
        isEnabledByDefault: false,
      },
    ],
  },
  {
    label: "Corn Job",
    href: "cronjob",
    pages: [
      {
        id: uuid(),
        title: "Ensure CronJob scheduler is valid",
        slug: "/built-in-rules/cronjob/ensure-cronjob-scheduler-valid",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure CronJob has a configured deadline",
        slug: "/built-in-rules/cronjob/ensure-cronjob-deadline",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Prevent CronJob from executing jobs concurrently",
        slug: "/built-in-rules/cronjob/prevent-cronjob-concurrency",
        isEnabledByDefault: false,
      },
    ],
  },
  {
    label: "Networking",
    href: "networking",
    pages: [
      {
        id: uuid(),
        title:
          "Prevent Ingress from forwarding all traffic to a single container",
        slug: "/built-in-rules/networking/prevent-ingress-forwarding-traffic-to-single-container",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Prevent Service from exposing node port",
        slug: "/built-in-rules/networking/prevent-node-port",
        isEnabledByDefault: true,
      },
    ],
  },
  {
    label: "Security",
    href: "security",
    pages: [
      {
        id: uuid(),
        title:
          "Prevent EndpointSlice validation from enabling host network hijack (CVE-2021-25737)",
        slug: "/built-in-rules/security/prevent-endpointslice-validation-from-enabling-host-network-hijack-cve-2021-25737",
        isEnabledByDefault: false,
      },
      {
        id: uuid(),
        title: "Prevent container security vulnerability (CVE-2021-25741)",
        slug: "/built-in-rules/security/prevent-container-security-vulnerability-cve-2021-25741",
        isEnabledByDefault: false,
      },
      {
        id: uuid(),
        title: "Prevent Ingress security vulnerability (CVE-2021-25742)",
        slug: "/built-in-rules/security/prevent-ingress-security-vulnerability-cve-2021-25742",
        isEnabledByDefault: false,
      },
      {
        id: uuid(),
        title: "Prevent ConfigMap security vulnerability (CVE-2021-25742)",
        slug: "/built-in-rules/security/prevent-configmap-security-vulnerability-cve-2021-25742",
        isEnabledByDefault: false,
      },
    ],
  },
  {
    label: "Deprecation",
    href: "deprecation",
    pages: [
      {
        id: uuid(),
        title: "Prevent deprecated APIs in Kubernetes v1.16",
        slug: "/built-in-rules/deprecation/prevent-deprecated-k8s-api-116",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Prevent deprecated APIs in Kubernetes v1.17",
        slug: "/built-in-rules/deprecation/prevent-deprecated-k8s-api-117",
        isEnabledByDefault: true,
      },
    ],
  },
  {
    label: "Argo",
    href: "argo",
    pages: [
      {
        id: uuid(),
        title: "Ensure Workflow DAG fail-fast on node failure",
        slug: "/built-in-rules/argo/ensure-workflow-dag-fail-fast-on-node-failure",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Prevent Workflow pods from using the default service account",
        slug: "/built-in-rules/argo/prevent-workflow-pods-from-using-the-default-service-account",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure ConfigMap is recognized by ArgoCD",
        slug: "/built-in-rules/argo/ensure-configmap-is-recognized-by-argocd",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure Rollout pause step has a configured duration",
        slug: "/built-in-rules/argo/ensure-rollout-pause-step-has-a-configured-duration",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title:
          "Ensure Application and AppProject are part of the argocd namespace",
        slug: "/built-in-rules/argo/ensure-application-and-appproject-are-part-of-the-argocd-namespace",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Prevent Workflow from having an empty retry strategy",
        slug: "/built-in-rules/argo/prevent-workflow-from-having-an-empty-retry-strategy",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure Rollout has revision history set",
        slug: "/built-in-rules/argo/ensure-rollout-has-revision-history-set",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure Rollout allows broadcasting IP table changes",
        slug: "/built-in-rules/argo/ensure-rollout-allows-broadcasting-ip-table-changes",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title:
          "Ensure Rollout that is marked as degraded scales down ReplicaSet",
        slug: "/built-in-rules/argo/ensure-rollout-that-is-marked-as-degraded-scales-down-replicaset",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure Workflow retry policy catches relevant errors only",
        slug: "/built-in-rules/argo/ensure-workflow-retry-policy-catches-relevant-errors-only",
        isEnabledByDefault: true,
      },
    ],
  },
  {
    label: "Other",
    href: "other",
    pages: [
      {
        id: uuid(),
        title: "Ensure HPA has minimum replicas configured",
        slug: "/built-in-rules/other/ensure-hpa-minimum-replicas",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Ensure HPA has maximum replicas configured",
        slug: "/built-in-rules/other/ensure-hpa-maximum-replicas",
        isEnabledByDefault: true,
      },
      {
        id: uuid(),
        title: "Prevent deploying naked pods",
        slug: "/built-in-rules/other/prevent-naked-pods",
        isEnabledByDefault: false,
      },
    ],
  },
];
