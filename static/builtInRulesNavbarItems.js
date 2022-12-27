import uuid from "react-uuid";

export const tabsItems = [
  { value: "Default", label: "Default" },
  { value: "Argo", label: "Argo" },
  { value: "cdk8s", label: "cdk8s" },
  { value: "Strict", label: "Strict"},
  { value: "NSA", label: "NSA"},
  { value: "Secrets", label: "Secrets"},
  { value: "Starter", label: "Starter" },
  { value: "EKS", label: "EKS"}
];

export const navItems = [
  {
    id: uuid(),
    title: "Ensure each container image has a pinned (tag) version",
    slug: "/built-in-rules/ensure-image-pinned-version",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_MISSING_IMAGE_VALUE_VERSION",
    tabOwner: ["Strict", "Default", "cdk8s", "Starter"],
  },
  {
    id: uuid(),
    title: "Ensure each container has a configured memory request",
    slug: "/built-in-rules/ensure-memory-request",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_MISSING_MEMORY_REQUEST_KEY",
    tabOwner: ["Strict", "Default", "Starter"],
  },
  {
    id: uuid(),
    title: "Ensure each container has a configured CPU request",
    slug: "/built-in-rules/ensure-cpu-request",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_MISSING_CPU_REQUEST_KEY",
    tabOwner: ["Strict", "Default"],
  },
  {
    id: uuid(),
    title: "Ensure each container has a configured memory limit",
    slug: "/built-in-rules/ensure-memory-limit",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_MISSING_MEMORY_LIMIT_KEY",
    tabOwner: ["Strict", "Default", "Starter"],
  },

  {
    id: uuid(),
    title: "Ensure each container has a configured CPU limit",
    slug: "/built-in-rules/ensure-cpu-limit",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_MISSING_CPU_LIMIT_KEY",
    tabOwner: ["Strict", "Default"],
  },
  {
    id: uuid(),
    title: "Ensure each container has a configured liveness probe",
    slug: "/built-in-rules/ensure-liveness-probe",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_MISSING_LIVENESSPROBE_KEY",
    tabOwner: ["Strict", "Default", "Starter"],
  },
  {
    id: uuid(),
    title: "Ensure each container has a configured readiness probe",
    slug: "/built-in-rules/ensure-readiness-probe",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_MISSING_READINESSPROBE_KEY",
    tabOwner: ["Strict", "Default", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent containers from having root access capabilities",
    slug: "/built-in-rules/prevent-privileged-containers",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_INCORRECT_PRIVILEGED_VALUE_TRUE",
    tabOwner: ["Strict", "Default"],
  },
  {
    id: uuid(),
    title: "Ensure each container image has a digest tag",
    slug: "/built-in-rules/ensure-digest-tag",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_MISSING_IMAGE_VALUE_DIGEST",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Prevent containers from sharing the host's PID namespace",
    slug: "/built-in-rules/prevent-using-host-pid",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_INCORRECT_HOSTPID_VALUE_TRUE",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Prevent containers from sharing the host's IPC namespace",
    slug: "/built-in-rules/prevent-using-host-ipc",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_INCORRECT_HOSTIPC_VALUE_TRUE",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Prevent containers from sharing the host's network namespace",
    slug: "/built-in-rules/prevent-using-host-network",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_INCORRECT_HOSTNETWORK_VALUE_TRUE",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Prevent containers from accessing host files by using high UIDs",
    slug: "/built-in-rules/prevent-uid-conflicts",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_INCORRECT_RUNASUSER_VALUE_LOWUID",
    tabOwner: ["Strict", "NSA", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent containers from mounting Docker socket",
    slug: "/built-in-rules/prevent-mounting-docker-socket",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_INCORRECT_PATH_VALUE_DOCKERSOCKET",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Ensure each container probe has an initial delay configured",
    slug: "/built-in-rules/ensure-initial-probe-delay",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_INCORRECT_INITIALDELAYSECONDS_VALUE",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Ensure each container probe has a configured frequency",
    slug: "/built-in-rules/ensure-probe-frequency",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_INCORRECT_PERIODSECONDS_VALUE",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Ensure each container probe has a configured timeout",
    slug: "/built-in-rules/ensure-probe-timeout",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_INCORRECT_TIMEOUTSECONDS_VALUE",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Ensure each container probe has a configured minimum success threshold",
    slug: "/built-in-rules/ensure-probe-min-success-threshold",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_INCORRECT_SUCCESSTHRESHOLD_VALUE",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Ensure each container probe has a configured failure threshold",
    slug: "/built-in-rules/ensure-probe-failure-threshold",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_INCORRECT_FAILURETHRESHOLD_VALUE",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Ensure each container probe has a configured prestop hook",
    slug: "/built-in-rules/ensure-prestop",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_MISSING_PRESTOP_KEY",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Prevent containers from having unnecessary system call privileges",
    slug: "/built-in-rules/prevent-system-call-privileges",
    isEnabledByDefault: false,
    pacIdentifier: "CONTAINERS_INCORRECT_SECCOMP_PROFILE",
    tabOwner: ["Strict"],
  },
  // workload
  {
    id: uuid(),
    title: "Ensure workload has valid label values",
    slug: "/built-in-rules/ensure-labels-value-valid",
    isEnabledByDefault: true,
    pacIdentifier: "WORKLOAD_INVALID_LABELS_VALUE",
    tabOwner: ["Strict", "Default", "cdk8s", "Starter"],
  },
  {
    id: uuid(),
    title: "Ensure deployment-like resource is using a valid restart policy",
    slug: "/built-in-rules/ensure-valid-restart-policy",
    isEnabledByDefault: true,
    pacIdentifier: "WORKLOAD_INCORRECT_RESTARTPOLICY_VALUE_ALWAYS",
    tabOwner: ["Strict", "Default", "cdk8s", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent workload from using the default namespace",
    slug: "/built-in-rules/prevent-deafult-namespce",
    isEnabledByDefault: true,
    pacIdentifier: "WORKLOAD_INCORRECT_NAMESPACE_VALUE_DEFAULT",
    tabOwner: ["Strict", "Default", "cdk8s", "Starter"],
  },
  {
    id: uuid(),
    title: "Ensure Deployment has more than one replica configured",
    slug: "/built-in-rules/ensure-minimum-two-replicas",
    isEnabledByDefault: true,
    pacIdentifier: "DEPLOYMENT_INCORRECT_REPLICAS_VALUE",
    tabOwner: ["Strict", "Default", "cdk8s", "Starter"],
  },
  {
    id: uuid(),
    title: "Ensure workload has a configured `owner` label",
    slug: "/built-in-rules/ensure-owner-label",
    isEnabledByDefault: false,
    pacIdentifier: "WORKLOAD_MISSING_LABEL_OWNER_VALUE",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Ensure Deployment has a configured `env` label",
    slug: "/built-in-rules/ensure-env-label",
    isEnabledByDefault: false,
    pacIdentifier: "DEPLOYMENT_MISSING_LABEL_ENV_VALUE",
    tabOwner: ["Strict"],
  },
  //CronJob
  {
    id: uuid(),
    title: "Ensure CronJob scheduler is valid",
    slug: "/built-in-rules/ensure-cronjob-scheduler-valid",
    isEnabledByDefault: true,
    pacIdentifier: "CRONJOB_INVALID_SCHEDULE_VALUE",
    tabOwner: ["Strict", "Default", "cdk8s", "Starter"],
  },




////////////////////









  {
    id: uuid(),
    title: "Ensure CronJob has a configured deadline",
    slug: "/built-in-rules/ensure-cronjob-deadline",
    isEnabledByDefault: true,
    pacIdentifier: "CRONJOB_MISSING_STARTINGDEADLINESECOND_KEY",
    tabOwner: ["Strict", "Default"],
  },
  {
    id: uuid(),
    title: "Prevent CronJob from executing jobs concurrently",
    slug: "/built-in-rules/prevent-cronjob-concurrency",
    isEnabledByDefault: false,
    pacIdentifier: "CRONJOB_MISSING_CONCURRENCYPOLICY_KEY",
    tabOwner: ["Strict", "Default"],
  },
  // Networking
  {
    id: uuid(),
    title: "Prevent Ingress from forwarding all traffic to a single container",
    slug: "/built-in-rules/prevent-ingress-forwarding-traffic-to-single-container",
    isEnabledByDefault: true,
    pacIdentifier: "INGRESS_INCORRECT_HOST_VALUE_PERMISSIVE",
    tabOwner: ["Strict", "cdk8s", "Default", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent Service from exposing node port",
    slug: "/built-in-rules/prevent-node-port",
    isEnabledByDefault: true,
    pacIdentifier: "SERVICE_INCORRECT_TYPE_VALUE_NODEPORT",
    tabOwner: ["Strict", "Default"],
  },
  // Security
  {
    id: uuid(),
    title:
      "Prevent EndpointSlice validation from enabling host network hijack (CVE-2021-25737)",
    slug: "/built-in-rules/prevent-endpointslice-validation-from-enabling-host-network-hijack-cve-2021-25737",
    isEnabledByDefault: false,
    pacIdentifier: "ENDPOINTSLICE_CVE2021_25373_INCORRECT_ADDRESSES_VALUE",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Prevent container security vulnerability (CVE-2021-25741)",
    slug: "/built-in-rules/prevent-container-security-vulnerability-cve-2021-25741",
    isEnabledByDefault: false,
    pacIdentifier: "INGRESS_CVE2021_25742_INCORRECT_SERVER_SNIPPET_KEY",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Prevent Ingress security vulnerability (CVE-2021-25742)",
    slug: "/built-in-rules/prevent-ingress-security-vulnerability-cve-2021-25742",
    isEnabledByDefault: false,
    pacIdentifier: "INGRESS_CVE2021_25742_INCORRECT_SERVER_SNIPPET_KEY",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Prevent ConfigMap security vulnerability (CVE-2021-25742)",
    slug: "/built-in-rules/prevent-configmap-security-vulnerability-cve-2021-25742",
    isEnabledByDefault: false,
    pacIdentifier: "CONFIGMAP_CVE2021_25742_INCORRECT_SNIPPET_ANNOTATIONS_VALUE",
    tabOwner: ["Strict"],
  },
  // Deprecation
  {
    id: uuid(),
    title: "Prevent deprecated APIs in Kubernetes v1.16",
    slug: "/built-in-rules/prevent-deprecated-k8s-api-116",
    isEnabledByDefault: true,
    pacIdentifier: "K8S_DEPRECATED_APIVERSION_1.16",
    tabOwner: ["Strict", "Default"],
  },
  {
    id: uuid(),
    title: "Prevent deprecated APIs in Kubernetes v1.17",
    slug: "/built-in-rules/prevent-deprecated-k8s-api-117",
    isEnabledByDefault: true,
    pacIdentifier: "K8S_DEPRECATED_APIVERSION_1.17",
    tabOwner: ["Strict", "Default"],
  },
  // Argo
  {
    id: uuid(),
    title: "Ensure Workflow DAG fail-fast on node failure",
    slug: "/built-in-rules/ensure-workflow-dag-fail-fast-on-node-failure",
    isEnabledByDefault: true,
    pacIdentifier: "ARGO_WORKFLOW_INCORRECT_FAILFAST_VALUE_FALSE",
    tabOwner: ["Strict", "Argo"],
  },
  {
    id: uuid(),
    title: "Prevent Workflow pods from using the default service account",
    slug: "/built-in-rules/prevent-workflow-pods-from-using-the-default-service-account",
    isEnabledByDefault: true,
    pacIdentifier: "ARGO_WORKFLOW_INCORRECT_SERVICE_ACCOUNT_NAME_VALUE_DEFAULT",
    tabOwner: ["Strict", "Argo"],
  },
  {
    id: uuid(),
    title: "Ensure ConfigMap is recognized by ArgoCD",
    slug: "/built-in-rules/ensure-configmap-is-recognized-by-argocd",
    isEnabledByDefault: true,
    pacIdentifier: "ARGO_CONFIGMAP_MISSING_PART_OF_LABEL_VALUE_ARGOCD",
    tabOwner: ["Strict", "Argo"],
  },
  {
    id: uuid(),
    title: "Ensure Rollout pause step has a configured duration",
    slug: "/built-in-rules/ensure-rollout-pause-step-has-a-configured-duration",
    isEnabledByDefault: true,
    pacIdentifier: "ARGO_ROLLOUT_MISSING_PAUSE_DURATION",
    tabOwner: ["Strict", "Argo"],
  },
  {
    id: uuid(),
    title: "Ensure Application and AppProject are part of the argocd namespace",
    slug: "/built-in-rules/ensure-application-and-appproject-are-part-of-the-argocd-namespace",
    isEnabledByDefault: true,
    pacIdentifier: "ARGO_APP_PROJECT_INCORRECT_NAMESPACE_VALUE",
    tabOwner: ["Strict", "Argo"],
  },
  {
    id: uuid(),
    title: "Prevent Workflow from having an empty retry strategy",
    slug: "/built-in-rules/prevent-workflow-from-having-an-empty-retry-strategy",
    isEnabledByDefault: true,
    pacIdentifier: "ARGO_WORKFLOW_INCORRECT_RETRY_STRATEGY_VALUE_EMPTY",
    tabOwner: ["Strict", "Argo"],
  },
  {
    id: uuid(),
    title: "Ensure Rollout has revision history set",
    slug: "/built-in-rules/ensure-rollout-has-revision-history-set",
    isEnabledByDefault: true,
    pacIdentifier: "ARGO_WORKFLOW_INCORRECT_REVISION_HISTORY_LIMIT_VALUE_0",
    tabOwner: ["Strict", "Argo"],
  },
  {
    id: uuid(),
    title: "Ensure Rollout allows broadcasting IP table changes",
    slug: "/built-in-rules/ensure-rollout-allows-broadcasting-ip-table-changes",
    isEnabledByDefault: true,
    pacIdentifier: "ARGO_ROLLOUT_INCORRECT_SCALE_DOWN_DELAY_VALUE_BELOW_30",
    tabOwner: ["Strict", "Argo"],
  },
  {
    id: uuid(),
    title: "Ensure Rollout that is marked as degraded scales down ReplicaSet",
    slug: "/built-in-rules/ensure-rollout-that-is-marked-as-degraded-scales-down-replicaset",
    isEnabledByDefault: true,
    pacIdentifier: "ARGO_ROLLOUT_INCORRECT_PROGRESS_DEADLINE_ABORT_VALUE_FALSE",
    tabOwner: ["Strict", "Argo"],
  },
  {
    id: uuid(),
    title: "Ensure Workflow retry policy catches relevant errors only",
    slug: "/built-in-rules/ensure-workflow-retry-policy-catches-relevant-errors-only",
    isEnabledByDefault: true,
    pacIdentifier: "ARGO_WORKFLOW_ENSURE_RETRY_ON_BOTH_ERROR_AND_TRANSIENT_ERROR",
    tabOwner: ["Strict", "Argo"],
  },
  // NSA
  {
    id: uuid(),
    title: "Ensure each container has a read-only root filesystem",
    slug: "/built-in-rules/ensure-read-only-filesystem",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_INCORRECT_READONLYROOTFILESYSTEM_VALUE",
    tabOwner: ["Strict", "NSA", "cdk8s", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent containers from accessing host files by using high GIDs",
    slug: "/built-in-rules/prevent-accessing-host-files-by-using-high-gids",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_INCORRECT_RUNASGROUP_VALUE_LOWGID",
    tabOwner: ["Strict", "NSA"],
  },
  {
    id: uuid(),
    title: "Prevent containers from accessing the underlying host",
    slug: "/built-in-rules/prevent-accessing-underlying-host",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_INCORRECT_KEY_HOSTPATH",
    tabOwner: ["Strict", "NSA", "cdk8s", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent containers from allowing command execution",
    slug: "/built-in-rules/prevent-allowing-command-execution",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_INCORRECT_RESOURCES_VERBS_VALUE",
    tabOwner: ["Strict", "NSA"],
  },
  {
    id: uuid(),
    title: "Prevent containers from escalating privileges",
    slug: "/built-in-rules/prevent-escalating-privileges",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_MISSING_KEY_ALLOWPRIVILEGEESCALATION",
    tabOwner: ["Strict", "NSA", "cdk8s", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent containers from having insecure capabilities",
    slug: "/built-in-rules/prevent-insecure-capabilities",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_INVALID_CAPABILITIES_VALUE",
    tabOwner: ["Strict", "NSA"],
  },
  {
    id: uuid(),
    title: "Prevent containers from insecurely exposing workload",
    slug: "/built-in-rules/prevent-insecurely-exposing-workload",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_INCORRECT_KEY_HOSTPORT",
    tabOwner: ["Strict", "NSA", "cdk8s", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent container from running with root privileges",
    slug: "/built-in-rules/prevent-running-with-root-privileges",
    isEnabledByDefault: true,
    pacIdentifier: "CONTAINERS_INCORRECT_RUNASNONROOT_VALUE",
    tabOwner: ["Strict", "NSA"],
  },
  {
    id: uuid(),
    title: "Prevent service account token auto-mounting on pods",
    slug: "/built-in-rules/prevent-service-account-token-auto-mount",
    isEnabledByDefault: true,
    pacIdentifier: "SRVACC_INCORRECT_AUTOMOUNTSERVICEACCOUNTTOKEN_VALUE",
    tabOwner: ["Strict", "NSA"],
  },
  // secrets
  {
    id: uuid(),
    title: "Prevent exposed BitBucket secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-bitbucket",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_BITBUCKET",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed Datadog secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-datadog",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_DATADOG",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed GCP secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-gcp",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_GCP",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed AWS secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-aws",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_AWS",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed GitHub secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-github",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_GITHUB",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed GitLab secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-gitlab",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_GITLAB",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed Terraform secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-terraform",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_TERRAFORM",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed Heroku secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-heroku",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_HEROKU",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed JWT secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-jwt",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_JWT",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed LaunchDarkly secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-launchdarkly",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_LAUNCHDARKLY",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed New Relic secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-newrelic",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_NEWRELIC",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed npm secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-npm",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_NPM",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed Okta secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-okta",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_OKTA",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed Stripe secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-stripe",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_STRIPE",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed SumoLogic secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-sumologic",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_SUMOLOGIC",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed Twilio secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-twilio",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_TWILIO",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed Vault secrets in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-vault",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_VAULT",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  {
    id: uuid(),
    title: "Prevent exposed private keys in objects",
    slug: "/built-in-rules/prevent-exposed-secrets-privatekey",
    isEnabledByDefault: true,
    pacIdentifier: "ALL_EXPOSED_SECRET_PRIVATEKEY",
    tabOwner: ["Strict", "Secrets", "Starter"],
  },
  // other
  {
    id: uuid(),
    title: "Ensure resource has a configured name",
    slug: "/built-in-rules/ensure-resource-name",
    isEnabledByDefault: true,
    pacIdentifier: "RESOURCE_MISSING_NAME",
    tabOwner: ["Strict", "Default", "cdk8s"],
  },
  {
    id: uuid(),
    title: "Ensure HPA has minimum replicas configured",
    slug: "/built-in-rules/ensure-hpa-minimum-replicas",
    isEnabledByDefault: true,
    pacIdentifier: "HPA_MISSING_MINREPLICAS_KEY",
    tabOwner: ["Strict", "Default"],
  },
  {
    id: uuid(),
    title: "Ensure HPA has maximum replicas configured",
    slug: "/built-in-rules/ensure-hpa-maximum-replicas",
    isEnabledByDefault: false,
    pacIdentifier: "HPA_MISSING_MAXREPLICAS_KEY",
    tabOwner: ["Strict"],
  },
  {
    id: uuid(),
    title: "Prevent deploying naked pods",
    slug: "/built-in-rules/prevent-naked-pods",
    isEnabledByDefault: false,
    pacIdentifier: "K8S_INCORRECT_KIND_VALUE_POD",
    tabOwner: ["Strict", "cdk8s"],
  },
  {
    id: uuid(),
    title: "Ensure each container fully utilizes CPU with no limitations",
    slug: "/built-in-rules/ensure-no-cpu-limit",
    isEnabledByDefault: false,
    pacIdentifier: "EKS_INVALID_CPU_LIMIT",
    tabOwner: ["Strict", "EKS"],
  },
  {
    id: uuid(),
    title: "Ensure container memory request and memory limit are equal",
    slug: "/built-in-rules/ensure-memory-request-limit-equal",
    isEnabledByDefault: false,
    pacIdentifier: "EKS_INVALID_MEMORY_REQUEST_LIMIT",
    tabOwner: ["Strict", "EKS"],
  },
  {
    id: uuid(),
    title: "Ensure containers have limited capabilities",
    slug: "/built-in-rules/ensure-containers-limited-capabilities",
    isEnabledByDefault: false,
    pacIdentifier: "EKS_INVALID_CAPABILITIES_EKS",
    tabOwner: ["Strict", "EKS"],
  },
  {
    id: uuid(),
    title: "Ensure multiple replicas run on different nodes",
    slug: "/built-in-rules/ensure-replicas-different-nodes",
    isEnabledByDefault: false,
    pacIdentifier: "EKS_MISSING_KEY_TOPOLOGYKEY",
    tabOwner: ["Strict", "EKS"],
  },
  {
    id: uuid(),
    title: "Prevent pods from becoming unschedulable",
    slug: "/built-in-rules/prevent-pods-becoming-unschedulable",
    isEnabledByDefault: false,
    pacIdentifier: "EKS_INVALID_VALUE_DONOOTSCHEDULE",
    tabOwner: ["Strict", "EKS"],
  },
  {
    id: uuid(),
    title: "Prevent Windows containers from running with unnecessary privileges",
    slug: "/built-in-rules/prevent-windows-containers-unnecessary-privileges",
    isEnabledByDefault: false,
    pacIdentifier: "EKS_INVALID_HOSTPROCESS_VALUE",
    tabOwner: ["Strict", "EKS"],
  },
  {
    id: uuid(),
    title: "Prevent SELinux containers from running with unnecessary privileges",
    slug: "/built-in-rules/prevent-selinux-containers-unnecessary-privileges",
    isEnabledByDefault: false,
    pacIdentifier: "EKS_INVALID_SELINUXOPTIONS_TYPE_VALUE",
    tabOwner: ["Strict", "EKS"],
  },
  {
    id: uuid(),
    title: "Prevent SELinux containers from setting a user",
    slug: "/built-in-rules/prevent-selinux-containers-user",
    isEnabledByDefault: false,
    pacIdentifier: "EKS_INVALID_SELINUXOPTIONS_USER_VALUE",
    tabOwner: ["Strict", "EKS"],
  },
  {
    id: uuid(),
    title: "Prevent SELinux containers from setting a role",
    slug: "/built-in-rules/prevent-selinux-containers-role",
    isEnabledByDefault: false,
    pacIdentifier: "EKS_INVALID_SELINUXOPTIONS_ROLE_VALUE",
    tabOwner: ["Strict", "EKS"],
  },
  {
    id: uuid(),
    title: "Ensure hostPath volume mounts are read-only",
    slug: "/built-in-rules/ensure-hostpath-mounts-readonly",
    isEnabledByDefault: false,
    pacIdentifier: "EKS_INVALID_HOSTPATH_MOUNT_READONLY_VALUE",
    tabOwner: ["Strict", "EKS"],
  },
];
