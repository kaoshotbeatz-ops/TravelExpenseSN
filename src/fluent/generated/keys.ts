import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    acl_line_create: {
                        table: 'sys_security_acl'
                        id: 'f324c0228c234c688c336a7fd1bc5c0a'
                    }
                    acl_line_read: {
                        table: 'sys_security_acl'
                        id: 'f5bb88da285c40c7ba367a8c947f69d5'
                    }
                    acl_line_write: {
                        table: 'sys_security_acl'
                        id: 'ed90836a05c14d4089a88fd043a1fb35'
                    }
                    acl_tr_create: {
                        table: 'sys_security_acl'
                        id: '88614f2be9e94b109f2e080af17a62a9'
                    }
                    acl_tr_read: {
                        table: 'sys_security_acl'
                        id: '6484dbce654c4b9f8ce80e1019751523'
                    }
                    acl_tr_write: {
                        table: 'sys_security_acl'
                        id: 'b12409e0e331477fb424ee661a314244'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'b8392b262a2642c388d27e976d5107b6'
                    }
                    ccs_expense_lines_required: {
                        table: 'catalog_script_client'
                        id: 'fb216954313347b48672f4bfc26c1daa'
                    }
                    ccs_expense_type_toggle: {
                        table: 'catalog_script_client'
                        id: '84b83aa6f3eb4eb58b85f20f1ebb2b1d'
                    }
                    ccs_total_onchange: {
                        table: 'catalog_script_client'
                        id: 'fc3c80d9f0fc4512a19fc5cb194617d5'
                    }
                    ccs_total_onsubmit: {
                        table: 'catalog_script_client'
                        id: 'a2395cf4b2ea4d15bf864e754361632c'
                    }
                    expense_lines_set: {
                        table: 'item_option_new_set'
                        id: '36602fe8a12246cd8dcac8fda6b6499e'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '02e7ce5cea33488084db617d276fe823'
                    }
                    rel_tr_approvers: {
                        table: 'sys_relationship'
                        id: '4bd560d295dd4fc68b93b7825c76e294'
                    }
                    'src_server_acl-expense-line-read_js': {
                        table: 'sys_module'
                        id: '7bb13fabd68746419e968d25e10ef8ae'
                    }
                    'src_server_acl-travel-request-read_js': {
                        table: 'sys_module'
                        id: '6cb055c335bf42dd93fbe16be10ba605'
                    }
                    src_server_TEApprovalRouter_js: {
                        table: 'sys_module'
                        id: 'f1988694ab7c4f63a0d6dc116b79d525'
                    }
                    'src_server_tne-create-route_js': {
                        table: 'sys_module'
                        id: 'c9359d82646a479abd1f2bbafff6485d'
                    }
                    'src_server_tne-grant-approver-role_js': {
                        table: 'sys_module'
                        id: 'ab97869d8219469ba819a5f889c440e3'
                    }
                    'src_server_tne-seed-requests_js': {
                        table: 'sys_module'
                        id: '9cbf816a04924216a4d003c6145d9eb3'
                    }
                    'src_server_tne-set-price_js': {
                        table: 'sys_module'
                        id: 'ccf3f720653e47cda9e1901f46f43756'
                    }
                    'src_server_tr-advance-approvals_js': {
                        table: 'sys_module'
                        id: 'f07164681e85456fb39bcba2dfe94f1e'
                    }
                    'src_server_tr-approvers-rel_js': {
                        table: 'sys_module'
                        id: 'e2bbade615d64c0ab37a46949d30f596'
                    }
                    'src_server_tr-grant-approver-role_js': {
                        table: 'sys_module'
                        id: '9d641bcee9ca4d2d9b948f65ce7a8df7'
                    }
                    'src_server_tr-line-items_js': {
                        table: 'sys_module'
                        id: '3c23d86e65014c1da0d6622fd376562b'
                    }
                    'src_server_tr-producer_js': {
                        table: 'sys_module'
                        id: '647a7a7bc0ad459db87d1a112e754edf'
                    }
                    src_server_TRApprovalEngine_js: {
                        table: 'sys_module'
                        id: '002a1fb91b634dc790b0195004a2c2d0'
                    }
                    src_server_TRShopperQual_js: {
                        table: 'sys_module'
                        id: '81219d8827824f77926b9f227375f73b'
                    }
                    tne_app_appr_all: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '2b22a317ea064621a2c182d3ca52e970'
                    }
                    tne_app_appr_pending: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '9c3e4e72d72048d8b488682f2221c989'
                    }
                    tne_app_lines_all: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'a431132cc95e461d9ba412df1de33076'
                    }
                    tne_app_tr_all: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '7bb5a62c103d4e8c86226ee3640dee6c'
                    }
                    tne_app_tr_closed: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '0b0b86dab68740458461369624079337'
                    }
                    tne_app_tr_open: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '8ebdd7a0eea6478093aeee786f3940c5'
                    }
                    tne_app_tr_pending: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'f8ca80e32f404068aaac68db69cba67a'
                    }
                    tne_approval_router: {
                        table: 'sys_script_include'
                        id: 'f7a8691fc7774f23a92790e92d108161'
                    }
                    tne_approver_group: {
                        table: 'sys_user_group'
                        id: '73dc73961d7b421e8212652df1e3584a'
                    }
                    tne_approver_group_member: {
                        table: 'sys_user_grmember'
                        id: 'ff4f6f125a144f33ba55b6234b599d1d'
                    }
                    tne_cat_approvals: {
                        table: 'sys_ux_list_category'
                        id: '6f9a5194dfda41e9b5c83bb9de7a1784'
                    }
                    tne_cat_lines: {
                        table: 'sys_ux_list_category'
                        id: '4f8ebc4c26354d60963f362b293c8de8'
                    }
                    tne_cat_requests: {
                        table: 'sys_ux_list_category'
                        id: 'a8ee8707a88a46d19c0406a2259ff895'
                    }
                    tne_category: {
                        table: 'sc_category'
                        id: 'd9b095e067804a1297a5cce71c8ba1f3'
                    }
                    tne_close_ok: {
                        table: 'sys_hub_action_instance_v2'
                        id: '94ca18b3da774d56b025368a22c845ac'
                    }
                    tne_close_rej: {
                        table: 'sys_hub_action_instance_v2'
                        id: '18de61c0f34547a4a19ec9bb2a12be57'
                    }
                    tne_create_route: {
                        table: 'sys_script'
                        id: '744814b8caf34beab045ba696c00e192'
                    }
                    tne_dash_tab: {
                        table: 'par_dashboard_tab'
                        id: '0cb823725f4e4ebbafc1a3d988da63ff'
                    }
                    tne_dashboard: {
                        table: 'par_dashboard'
                        id: '43e4c15aaab44ee287a948513e47462e'
                    }
                    tne_each_step: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '15ab911a7bb14ad0bedc6158f39413f5'
                    }
                    tne_final_check: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'cd378a03137a4aa3a68ffe43aa7c4711'
                    }
                    tne_fulfillment_flow: {
                        table: 'sys_hub_flow'
                        id: 'dab9a1018b8b4cdcb6b737c341441a82'
                    }
                    tne_grant_approver_role: {
                        table: 'sys_script'
                        id: '4b70ad626e414ef69260993fedaaeeea'
                    }
                    tne_kb_base: {
                        table: 'kb_knowledge_base'
                        id: '1e36ea9acccf4e7ebdd67cd325ed54f6'
                    }
                    tne_kb_howto: {
                        table: 'kb_knowledge'
                        id: '9f11feafe0e5496eadd5018d72a83a67'
                    }
                    tne_kb_tech: {
                        table: 'kb_knowledge'
                        id: 'fc5b6697bb8e441589afcc86c0a55ebd'
                    }
                    tne_list_appr_all: {
                        table: 'sys_ux_list'
                        id: '91b168f6c1584d50a2b7c842051ea8e9'
                    }
                    tne_list_appr_pending: {
                        table: 'sys_ux_list'
                        id: '9c122535cf484ed8bd9c4651e59c39d1'
                    }
                    tne_list_lines_all: {
                        table: 'sys_ux_list'
                        id: 'c9df796bab4d4ff58360ec4af4550145'
                    }
                    tne_list_tr_all: {
                        table: 'sys_ux_list'
                        id: '0a30825d39754d6eb3f55b5bc2c85eff'
                    }
                    tne_list_tr_closed: {
                        table: 'sys_ux_list'
                        id: '690843dbbc274ab4b15a30f8aeeb060b'
                    }
                    tne_list_tr_open: {
                        table: 'sys_ux_list'
                        id: '73915cfc7694430d859bf9b1367bf8b2'
                    }
                    tne_list_tr_pending: {
                        table: 'sys_ux_list'
                        id: '8a7e46db17e249d9be098e58d0f03bce'
                    }
                    tne_log_count: {
                        table: 'sys_hub_action_instance_v2'
                        id: '021c2de3edfe404d8bd566a5981c98ee'
                    }
                    tne_log_step: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'cccd7694baa448cd81a77f20fa730809'
                    }
                    tne_lookup_steps: {
                        table: 'sys_hub_action_instance_v2'
                        id: '410d77b5a98b4268993d017f21c54b2a'
                    }
                    tne_not_rejected: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'da9ded40511140daa57a35596c7079f3'
                    }
                    tne_ritm_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'f767eec39a904c8d93180fead47bda34'
                    }
                    tne_seed_fix_script: {
                        table: 'sys_script_fix'
                        id: '7a834c02d73f40d5a6dbded0d403dd43'
                    }
                    tne_set_price: {
                        table: 'sys_script'
                        id: '8de141b29d624c6d8bf6c5962f0f7e60'
                    }
                    tne_step_appr: {
                        table: 'sys_hub_action_instance_v2'
                        id: '9b5bb7c769854d9d94e9f00c9cc297fe'
                    }
                    tne_step_go: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: '7b38b9a8bc884126b19c16cfb5a91285'
                    }
                    tne_step_guard: {
                        table: 'sys_hub_action_instance_v2'
                        id: 'f91ad0d9a1be40188abcf2e07e6c6f9e'
                    }
                    tne_step_rej: {
                        table: 'sys_hub_flow_logic_instance_v2'
                        id: 'bc7c9241b8ed4a7390b0974485e3a353'
                    }
                    tne_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '0f29b1a49c7a48b8b5248ab6f12f5211'
                    }
                    tne_w_approval: {
                        table: 'par_dashboard_widget'
                        id: 'ec6ec9e749c74572be4a06cfcd4588f8'
                    }
                    tne_w_approved: {
                        table: 'par_dashboard_widget'
                        id: '56bb1446676445f5b358c9cb36eab0b7'
                    }
                    tne_w_pending: {
                        table: 'par_dashboard_widget'
                        id: '5551e8cc09be4ba6b24e0dfa11bcc04f'
                    }
                    tne_w_requesters: {
                        table: 'par_dashboard_widget'
                        id: 'bd99e0b8319a491a90c2bf41cccba361'
                    }
                    tne_w_spend: {
                        table: 'par_dashboard_widget'
                        id: '3a47932f606f419eaf308a60531147ce'
                    }
                    tne_w_spendbyreq: {
                        table: 'par_dashboard_widget'
                        id: 'ce416025485b4b109183e2010d6d620a'
                    }
                    tne_w_state: {
                        table: 'par_dashboard_widget'
                        id: '7f5cb9269b9b4b0e85d1d1751a12c0bc'
                    }
                    tne_w_total: {
                        table: 'par_dashboard_widget'
                        id: '3aff78cb53ae41b899a868de200a2dbd'
                    }
                    tne_workspace: {
                        table: 'sys_ux_page_registry'
                        id: '9f0ce2a026284fe4b7db59e58e8c1d21'
                    }
                    tne_workspace_acl: {
                        table: 'sys_security_acl'
                        id: '5d9d8fac6822415db6d2043b71247e88'
                    }
                    tne_workspace_sys_ux_app_config_workspace: {
                        table: 'sys_ux_app_config'
                        id: '887dfb53fb3749a788d76734c92c6c84'
                    }
                    tne_workspace_sys_ux_app_route_home: {
                        table: 'sys_ux_app_route'
                        id: '31599a68d0864f2aa0e2a42fde0a0fb8'
                    }
                    tne_workspace_sys_ux_app_route_list: {
                        table: 'sys_ux_app_route'
                        id: 'eb774a9ae6f84934961c08f07c0de545'
                    }
                    tne_workspace_sys_ux_app_route_record: {
                        table: 'sys_ux_app_route'
                        id: '7802269e29294717b1e43c57a3c32ee7'
                    }
                    'tne_workspace_sys_ux_app_route_simple-list': {
                        table: 'sys_ux_app_route'
                        id: 'a24ded685c5e43678f570736222b513e'
                    }
                    tne_workspace_sys_ux_macroponent_record: {
                        table: 'sys_ux_macroponent'
                        id: '0379c66adcd44c03a2b50c4cc8d9047a'
                    }
                    tne_workspace_sys_ux_page_property_chrome_footer: {
                        table: 'sys_ux_page_property'
                        id: '38223683faa243bc91109aa636d63a70'
                    }
                    tne_workspace_sys_ux_page_property_chrome_header: {
                        table: 'sys_ux_page_property'
                        id: '9e009a81ac5844669c21387ff7d1deee'
                    }
                    tne_workspace_sys_ux_page_property_chrome_tab: {
                        table: 'sys_ux_page_property'
                        id: '1a67281ffa8d451cb983b064858f0bd6'
                    }
                    tne_workspace_sys_ux_page_property_chrome_toolbar: {
                        table: 'sys_ux_page_property'
                        id: '549d99f1a5f84bb18859ace37ff4bfc5'
                    }
                    tne_workspace_sys_ux_page_property_listConfigId: {
                        table: 'sys_ux_page_property'
                        id: '48a6e3fa7d7b4089ab34229ec05c54cf'
                    }
                    tne_workspace_sys_ux_page_property_view: {
                        table: 'sys_ux_page_property'
                        id: '861b1dd3645c4e86b353a8277e460609'
                    }
                    tne_workspace_sys_ux_page_property_wbApplicabilityConfigId: {
                        table: 'sys_ux_page_property'
                        id: '64343a0fdab84611ac8b90986453a4ba'
                    }
                    tne_workspace_sys_ux_registry_m2m_category_unifiedNav: {
                        table: 'sys_ux_registry_m2m_category'
                        id: 'ad2c9b3fe4684aedb0c4973a1976d2ba'
                    }
                    tne_workspace_sys_ux_screen_home: {
                        table: 'sys_ux_screen'
                        id: 'feb7d48175844446a88458d943c936b1'
                    }
                    tne_workspace_sys_ux_screen_list: {
                        table: 'sys_ux_screen'
                        id: '20e20772173548bfa74e4698588aa3a8'
                    }
                    tne_workspace_sys_ux_screen_record: {
                        table: 'sys_ux_screen'
                        id: 'fa8d247b93744550b84d7e872b4da9e2'
                    }
                    'tne_workspace_sys_ux_screen_simple-list': {
                        table: 'sys_ux_screen'
                        id: '9d34c35a1bec4a92a2792636b090d56d'
                    }
                    tne_workspace_sys_ux_screen_type_home: {
                        table: 'sys_ux_screen_type'
                        id: 'b48889deeed84211a8362c039d7d0480'
                    }
                    tne_workspace_sys_ux_screen_type_list: {
                        table: 'sys_ux_screen_type'
                        id: 'df30ae25372d4809a5d0ae65e5b037b3'
                    }
                    tne_workspace_sys_ux_screen_type_record: {
                        table: 'sys_ux_screen_type'
                        id: '1715f961f0024f0b8a141d3b908133a3'
                    }
                    'tne_workspace_sys_ux_screen_type_simple-list': {
                        table: 'sys_ux_screen_type'
                        id: '0a3046940dba408e97d92be4d0a73d39'
                    }
                    tne_ws_applicability: {
                        table: 'sys_ux_applicability'
                        id: 'a3f1d53c792742518ad9237f2cd4ec18'
                    }
                    tne_ws_list_config: {
                        table: 'sys_ux_list_menu_config'
                        id: 'a59787f2e1dd43e482400522c8e78b9f'
                    }
                    tr_advance_approvals: {
                        table: 'sys_script'
                        id: 'effe5f15390147bfa371ad21d9d65c66'
                    }
                    tr_app_menu: {
                        table: 'sys_app_application'
                        id: 'e484a2456be440efa964bea24bd37e39'
                    }
                    tr_approval_engine: {
                        table: 'sys_script_include'
                        id: '6d29f6c8f6f042ab8006f79cb8d4527e'
                    }
                    tr_grant_approver_role: {
                        table: 'sys_script'
                        id: '68e79b0c06284531a90ee3e0387c5e12'
                    }
                    tr_mod_all: {
                        table: 'sys_app_module'
                        id: '387be73066fe49cfbd0d791ba8b1c7db'
                    }
                    tr_mod_approvals: {
                        table: 'sys_app_module'
                        id: 'c3a114d625124b1f8eab9ed58cbcd30f'
                    }
                    tr_mod_closed: {
                        table: 'sys_app_module'
                        id: 'd96215b7c90949e6862fcf19cef8acf9'
                    }
                    tr_mod_group_plans: {
                        table: 'sys_app_module'
                        id: '23ef8e2ba621483e9e0d10e8c81b6b5b'
                    }
                    tr_mod_groups: {
                        table: 'sys_app_module'
                        id: 'b75309c425a246c483fde41420ccfb8e'
                    }
                    tr_mod_lines: {
                        table: 'sys_app_module'
                        id: '3a043ace822d429cb924c24df10ea4e7'
                    }
                    tr_mod_new: {
                        table: 'sys_app_module'
                        id: '2883c4133dc444d8acfedacd5a0fc54f'
                    }
                    tr_mod_open: {
                        table: 'sys_app_module'
                        id: '474ca43a3199489f81dcd444f54f6f66'
                    }
                    tr_mod_pending: {
                        table: 'sys_app_module'
                        id: '9015c5efef2542d2a88306179d6c251e'
                    }
                    tr_mod_plans: {
                        table: 'sys_app_module'
                        id: '29a6783b50bf48aeba6cfc86a6503a88'
                    }
                    tr_mod_rules: {
                        table: 'sys_app_module'
                        id: '2acd6f4c11ab4dcd931d98fce872a08d'
                    }
                    tr_rule_cfo_chief: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'db6718e1fbd2416cb154ed97339473d1'
                        deleted: true
                    }
                    tr_rule_cfo_direct: {
                        table: 'x_trou_tande_approval_rule'
                        id: '640cc6af9da848d697c8fa2e87a19c49'
                        deleted: false
                    }
                    tr_rule_cfo_director: {
                        table: 'x_trou_tande_approval_rule'
                        id: '3c41c67129c049e8a5a334d71e497340'
                        deleted: true
                    }
                    tr_rule_cfo_l2: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'f346d1799b7e4f1c94b8f100dd657473'
                    }
                    tr_rule_cfo_l3: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'd47db3da7d644203884e3fc5eefbbc89'
                    }
                    tr_rule_cfo_managing_dir: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'e174ced46ff24f9896cdce67203991a2'
                        deleted: true
                    }
                    tr_rule_cfo_over10k: {
                        table: 'x_trou_tande_approval_rule'
                        id: '18dfbacf68d24e47bb1cdee3b3311111'
                        deleted: true
                    }
                    tr_rule_cfo_top: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'fe87e50eab004ba19b8205a031d7c5d3'
                    }
                    tr_rule_cfo_under10k: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'a18ac6f161014976a896d55f1cfb20ba'
                        deleted: true
                    }
                    tr_rule_cio_chief: {
                        table: 'x_trou_tande_approval_rule'
                        id: '1aac73d24503429d8a8f7bda7c4ec3df'
                        deleted: true
                    }
                    tr_rule_cio_direct: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'cd63a524e06342628ee91802d372f82f'
                    }
                    tr_rule_cio_director: {
                        table: 'x_trou_tande_approval_rule'
                        id: '5b57096bbb254a009519ed339a609bfe'
                        deleted: true
                    }
                    tr_rule_cio_l2: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'ef6f06fc67eb4d489137b8a1d02f3f77'
                    }
                    tr_rule_cio_l3: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'b014ad96c7fe493c80d4aa426ad55ccd'
                    }
                    tr_rule_cio_managing_dir: {
                        table: 'x_trou_tande_approval_rule'
                        id: '32b1e11bed4d4a628fc3e7fb37688b4f'
                        deleted: true
                    }
                    tr_rule_cio_over1k: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'fc2b785e4bb74c57bddeba5c77c6a820'
                        deleted: true
                    }
                    tr_rule_cio_top: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'e0e9a15260194150b351a3330c942ff4'
                    }
                    tr_rule_cio_under1k: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'ae2846015c3e4855b4a88e20b61ece9f'
                        deleted: true
                    }
                    tr_rule_direct_manager: {
                        table: 'x_trou_tande_approval_rule'
                        id: '71f51dd18fe34ef2be1f5465ca0188ae'
                        deleted: true
                    }
                    tr_rule_inv_chief: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'ecca8ca15f4f477a86a54a7e456d23ef'
                        deleted: true
                    }
                    tr_rule_inv_direct: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'd66a15d7c0c0416caa7e6bbb5ffc31da'
                        deleted: false
                    }
                    tr_rule_inv_director: {
                        table: 'x_trou_tande_approval_rule'
                        id: '3a2cf0b4632f45b492428d6de2ab4ce5'
                        deleted: true
                    }
                    tr_rule_inv_l2: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'b2c2239d6d5a45579e5a67facd11b229'
                    }
                    tr_rule_inv_l3: {
                        table: 'x_trou_tande_approval_rule'
                        id: '7f5669e26ccb4e0c9598efa5764d1e15'
                    }
                    tr_rule_inv_managing_dir: {
                        table: 'x_trou_tande_approval_rule'
                        id: '095930d69e054b9ea49948dfc77a3b65'
                        deleted: true
                    }
                    tr_rule_inv_over10k: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'd563fb2245b141c3b758c6eeba51168b'
                        deleted: true
                    }
                    tr_rule_inv_top: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'a0a6e71367934eb38f787bd2d1b6ae90'
                    }
                    tr_rule_inv_under10k: {
                        table: 'x_trou_tande_approval_rule'
                        id: '9afae85d04db47648f99058033202c2c'
                        deleted: true
                    }
                    tr_rule_inv_under1k: {
                        table: 'x_trou_tande_approval_rule'
                        id: '74baa00b86054c98b62c9dfdfc75c772'
                        deleted: true
                    }
                    tr_rule_up_to_chief: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'c6e5b1a7a4f7478c954fb7c1732d2ef2'
                        deleted: true
                    }
                    tr_rule_up_to_director: {
                        table: 'x_trou_tande_approval_rule'
                        id: 'f9ac645ef9d6465fbead6ca64201ca60'
                        deleted: true
                    }
                    tr_rule_up_to_managing_dir: {
                        table: 'x_trou_tande_approval_rule'
                        id: '93260d7254724d3ca60badcf9ea7227f'
                        deleted: true
                    }
                    tr_shopper_qual: {
                        table: 'sys_script_include'
                        id: 'e8e22f75357f427bb3a112fd4573f46b'
                    }
                    tr_tab_activity: {
                        table: 'sn_ex_sp_task_tab_configuration'
                        id: '2267b0e3f56f4696bf8415f6eacaf3ca'
                    }
                    tr_tab_activity_open: {
                        table: 'sn_ex_sp_task_tab_configuration'
                        id: '8ab0e9176ecc4a9dac4512f8d970ddb5'
                    }
                    tr_tab_attachments: {
                        table: 'sn_ex_sp_task_tab_configuration'
                        id: '7b519f7041f44daabcce306ac09cfbf3'
                    }
                    tr_tab_attachments_open: {
                        table: 'sn_ex_sp_task_tab_configuration'
                        id: '8656afd2b2fc4688b5285dd5a42ef1c7'
                    }
                    tr_tab_line_items: {
                        table: 'sn_ex_sp_task_tab_configuration'
                        id: '801fec8ed9734090b2204d0153c55e25'
                    }
                    tr_tab_line_items_open: {
                        table: 'sn_ex_sp_task_tab_configuration'
                        id: 'b98e50d6b8994be6926a846793b904bc'
                    }
                    tr_task_config: {
                        table: 'sn_ex_sp_task_configuration'
                        id: 'ad2d11907387423ebf0f057a04cfe94d'
                    }
                    tr_task_config_open: {
                        table: 'sn_ex_sp_task_configuration'
                        id: '5d498f9569004d24b4b3fe1c65696d3a'
                    }
                    travel_expense_item: {
                        table: 'sc_cat_item'
                        id: 'c3dd90e29eaf40e8aa7531b0950fcfc7'
                    }
                    travel_request_producer: {
                        table: 'sc_cat_item_producer'
                        id: '4100526eeec148d68694c0c4f5a4f252'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '00cc12e7e2b5417fbd9d7d337ae7bbdd'
                        key: {
                            name: 'x_trou_tande_approval_group'
                            element: 'members'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '01839bb5b56049b88aa6da753792c581'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'depart'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '01a20f2d61584e1f9b7a9e54df9fa766'
                        key: {
                            sc_cat_item: '4100526eeec148d68694c0c4f5a4f252'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '02c7d3b9b83e42f69b91e99ceffb5ec0'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'approval_routing_method'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '043717006586472e98fb5158a33c31fa'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '04b7fd0729ac427390999e34e6f39ee7'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'work_notes'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '05e9a90f0a964d3d8ab9087a77f611b4'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approval_routing_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '07ab123f8a4f4c0bb13ad334fb30f239'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'requested_for'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '07ff3a09e8284008a9d1930ae0970d3e'
                        key: {
                            sys_ui_form: {
                                id: '2e7bccba309f4f95bbfeda15dcba56a2'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '0801254ee1a54b74978690a3390ff6e0'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Approvers'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '0801254ee1a54b74978690a3390ff6e0'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            caption: 'Approvers'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '08d2cad7ab324f92889392a162c1a412'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'plan'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '08fb011ffd6641f897023fdce2523f40'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0a37da6c3fb340eba163d830464a17cc'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_type'
                            value: 'ground_car'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a766a482c17452c969b14d6ac18eecf'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0c0724a74b454eed92a98a7060ffbe76'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c16aae946e84fb9828b58b19f2f1023'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'needs_approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0c331ec3b4c54473937e35e2a652d075'
                        key: {
                            name: 'x_trou_tande_approval_group'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0dff46be341348168e6be7eda0ce499f'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'agency'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '0edb1ed24aaf46c0aa739be2c68802f2'
                        key: {
                            list_id: {
                                id: 'f95ae0bce3fb413890c87cecc76baac8'
                                key: {
                                    name: 'x_trou_tande_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_trou_tande_travel_request'
                                }
                            }
                            element: 'expense_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ee934559101428e90fc81604a833ebd'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '137c3e6b85dd4899b4a7d4b282831d1d'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'rule_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '14f44c004a904af4aed94c64bd68230e'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'car_destination'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1588d4d987664fdf96123af93b6ef6a6'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_type'
                            value: 'training'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '168d678879044fbd8097f8a3f97d2e40'
                        key: {
                            list_id: {
                                id: 'f95ae0bce3fb413890c87cecc76baac8'
                                key: {
                                    name: 'x_trou_tande_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_trou_tande_travel_request'
                                }
                            }
                            element: 'business_purpose'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '16b69adb94fc4e6b8fe52dc061c2bb0f'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            caption: 'Expense Lines'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '17d79777edea4302abaad93be02528c7'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'self_approve'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '17fca91b5b614d4daf95dcbdf6858805'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approval_routing_method'
                            value: 'sequential'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '191becfc4e394bee9c952a5c73c8b07f'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'approval_routing_method'
                            value: 'parallel'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19542a67a85040e3b6bc24c329a38bd7'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approver_list'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '197314747a6c446299b4888810ffd670'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1a278dfad63544f99f3e6556fea01e7c'
                        key: {
                            cat_item: '4100526eeec148d68694c0c4f5a4f252'
                            variable_set: 'NULL'
                            name: 'total_amount'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1a88d723d892447586e03817a072394d'
                        key: {
                            cat_item: 'c3dd90e29eaf40e8aa7531b0950fcfc7'
                            variable_set: 'NULL'
                            name: 'trip_purpose'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1ae43c0371b44f3da56fdd16db86dcee'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'expense_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1d71ced355e64f95ad261a63296271df'
                        key: {
                            sys_security_acl: '5d9d8fac6822415db6d2043b71247e88'
                            sys_user_role: {
                                id: 'dde028492f5047ea81238d716d14cde7'
                                key: {
                                    name: 'x_trou_tande.workspace'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1fa812bde54f476ba6554c03922e4817'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'report_name'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '1fb0994f19c94c7aac174f849b43e63e'
                        key: {
                            question: {
                                id: '8308c63d2126413dbeac4fcb360ba984'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'agency'
                                }
                            }
                            value: 'hertz'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1ff8982ab1cb4c6c82c5f7fdc404dd82'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'travel_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '20ca89de5ed84cd393ea1f50bd1cf0a9'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'send_to'
                            value: 'direct_manager'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2129a73ce5c74da4927103b5ba1f1cf4'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'approval_group'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '22ecb64e2b58406893530a681b3bde0f'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'dropoff_diff'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '231e3e69fc474b83820f5b0969b71522'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'rule_type'
                            value: 'group'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2459ee015ec643918e190c8fa77572f3'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'step'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '2542267c461e4549b049c375137aee58'
                        key: {
                            sys_ui_form: {
                                id: '2e7bccba309f4f95bbfeda15dcba56a2'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '25c5809f45444181a7d27d394d79ca90'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '26a161e082c1415399aaed84f1540318'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'self_approve'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2730d5d249d64fcc9ebd0465989f802c'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'dropoff'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '27982b16b708407c814bd233e18d23d0'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'enable_self_approval'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '2873a87de072406d98b35afd671cea68'
                        key: {
                            cat_item: 'c3dd90e29eaf40e8aa7531b0950fcfc7'
                            variable_set: 'NULL'
                            name: 'requested_for'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '289b101a08f9414ebb11a4b0b9469517'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_type'
                            value: 'meals'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '29351983973f40c4bf76ed8674da61c3'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'send_to'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2991c460c3fd4affb33afc25b4893932'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'rule_type'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '29fdf35b9a3c466d86d28564183f968a'
                        key: {
                            question: {
                                id: '8308c63d2126413dbeac4fcb360ba984'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'agency'
                                }
                            }
                            value: 'budget'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a35fa9e2d4644e8a39fc8fdad6dadf6'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approving_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a63be38c5814cb8b18c3f680c8f93f9'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'approval_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '2a67f6d9796e4ad8bb91adf3b2496e7d'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            caption: 'Approval'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2aae300c61144a44a1d60d3c780b08a5'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'state'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ab4423109bd480c878861dc1364951a'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'report_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '2aea9b62de79417b8696eed2101df779'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            caption: 'Activity'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '2b11dde0cb7644e792a4a5f4d1e6776b'
                        key: {
                            cat_item: '4100526eeec148d68694c0c4f5a4f252'
                            variable_set: 'NULL'
                            name: 'requested_for'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c644bd9565c4c29a65151fcba5a3b33'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'pickup'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '2cee703c71474607b6d960c0b2a17f4e'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'passenger'
                        }
                    },
                    {
                        table: 'sys_hub_flow_stage'
                        id: '2d6983bc0d9e4c69b96c4c4c5342367b'
                        key: {
                            flow: 'dab9a1018b8b4cdcb6b737c341441a82'
                            value: 'fulfillment'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '2e7bccba309f4f95bbfeda15dcba56a2'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '2f6a8351769e463083d968e427f73666'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '2f8fecee7c8a4009af9bbd03677a809c'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'rule_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '311aeee638614d188465715015b5fb45'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3171a56fee164d829d56f4ee30bc2316'
                        deleted: true
                        key: {
                            list_id: {
                                id: 'f7e68ca3e48047638c5222dfefa5e9c3'
                                key: {
                                    name: 'sysapproval_approver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: '4bd560d295dd4fc68b93b7825c76e294'
                                    parent: 'x_trou_tande_travel_request'
                                }
                            }
                            element: 'sys_created_on'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '31b3d259fafa4bada3f0a1bd5229cf97'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'passenger'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '33cae1bf209c46e39abe648add8fc309'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '33db01ff00f3466a9318cf04b3f33843'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3529c98afc8d4acf8e7c034a70dab20d'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'business_owner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '352e0806415f4ec09e1628f74a4c82b4'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'users'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36b814b185ed44b6960d1b0d4bc7065d'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'approver'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '36bf5ba8eb234bdca4c53e73f14976f2'
                        key: {
                            list_id: {
                                id: 'f95ae0bce3fb413890c87cecc76baac8'
                                key: {
                                    name: 'x_trou_tande_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_trou_tande_travel_request'
                                }
                            }
                            element: 'expense_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36c307a060ba431ba5dd6b4d36c41ad6'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approval_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '37976d6a80bd4bc081b352658b2a87a0'
                        key: {
                            name: 'x_trou_tande_approval_group'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '37d5c8be80404512b69d0ddcd9f9ef97'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approval_rule'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3809e79406c7440ab5a321d69899b4ad'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'amount_min'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '38a84702235b4c94af63fc50add85a17'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'dropoff'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '38ceba46cff548e5bbf5033af66d5447'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'air_class'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3a315bca17a545fb960d5f458cb89147'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'total_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'io_set_item'
                        id: '3a764cde78dc40f8af30b10f32010bac'
                        key: {
                            sc_cat_item: 'c3dd90e29eaf40e8aa7531b0950fcfc7'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3af992b6016847049c1d01a03be4ca9c'
                        key: {
                            question: {
                                id: '8308c63d2126413dbeac4fcb360ba984'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'agency'
                                }
                            }
                            value: 'alamo'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3ba42756fe6c4ca5838b7bbdd48a5a91'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approval_group'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '3bc0515da7ea4eb694d5b52171bff039'
                        key: {
                            list_id: {
                                id: 'f95ae0bce3fb413890c87cecc76baac8'
                                key: {
                                    name: 'x_trou_tande_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'x_trou_tande_travel_request'
                                }
                            }
                            element: 'amount'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '3c0e975b2ccb41b0be56f0852a135301'
                        key: {
                            question: {
                                id: 'd286b22603d848bfbda8fe63a54dc092'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'car_class'
                                }
                            }
                            value: 'compact'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3dd99cb85591457db135bd1323c2471b'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'approval_plan'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3e0642798075485db886e18242c6403e'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_type'
                            value: 'ground_taxi'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e1a2cc741f444b4822c38ed9014fcb1'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'exclude_departments'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3e1cff6f02b6404ca8a109c6ff583deb'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'amount_max'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '408f414851bb41a6be88d28bf5ce7fd3'
                        key: {
                            sc_cat_item: '4100526eeec148d68694c0c4f5a4f252'
                            sc_category: 'd9b095e067804a1297a5cce71c8ba1f3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '41f5080fc5f44b5085f5069d37db063d'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'step'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '43fa69f21c0f43a98321650694d2447b'
                        deleted: true
                        key: {
                            list_id: {
                                id: '8f5cc30209754812a2f844d85b889baf'
                                key: {
                                    name: 'x_trou_tande_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'amount'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '44b964d2b27045928da6e9d9526c44b9'
                        key: {
                            question: {
                                id: 'd286b22603d848bfbda8fe63a54dc092'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'car_class'
                                }
                            }
                            value: 'economy'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '455a2ffc5c794d648e3811ef757bf692'
                        key: {
                            category: {
                                id: 'd391dff3645a419cb72c478806a6942c'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                }
                            }
                            prefix: 'TRVL'
                        }
                    },
                    {
                        table: 'm2m_connected_content'
                        id: '45bc53c3a8e848adb0e5823f0f4ef3d0'
                        key: {
                            catalog_item: '4100526eeec148d68694c0c4f5a4f252'
                            topic: 'c5ed62c4c3203010069aec4b7d40dd61'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '469264d94e5645f9ba7e0048513d9b61'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approval_routing_method'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '47273809d13347e29f5c3ca79e293284'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'opened_by'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47c9ba6032f64778b0416a981cc64276'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'air_destination'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '4908091ba6024a8aafca5904a1552b24'
                        key: {
                            name: 'x_trou_tande_expense_line'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4add1a42a0a546488cb1f9264b169304'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'depart'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '4b8da41c4146429cb1b9f76cc20bbdad'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'organization'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4b8eebcbf0fb4990b96c8490c59a925a'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_for'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b9787fb68ea41d1a4345694d1c296c1'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approval_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '4c15a734312a4dc08ecce507c8990740'
                        key: {
                            question: {
                                id: '1ae43c0371b44f3da56fdd16db86dcee'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'expense_type'
                                }
                            }
                            value: 'hotel'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '4c97915dca7147cebc77aa076661775d'
                        key: {
                            sc_cat_item: 'c3dd90e29eaf40e8aa7531b0950fcfc7'
                            sc_category: 'd9b095e067804a1297a5cce71c8ba1f3'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '4cf4c00a44b145c4b21e81a2980bf943'
                        key: {
                            sc_cat_item: 'c3dd90e29eaf40e8aa7531b0950fcfc7'
                            sc_catalog: 'e0d08b13c3330100c8b837659bba8fb4'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '4cf71054db164d7c92b07ef48f0e0277'
                        key: {
                            question: {
                                id: '8308c63d2126413dbeac4fcb360ba984'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'agency'
                                }
                            }
                            value: 'sixt'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4f185d3ba3f34a14b48c92d00dcb7869'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'plan_state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '509d8bb396e74ebd97de305d470f8bc4'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approving_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '50a3788a647e409ca275afc2edb2bc32'
                        key: {
                            question: {
                                id: 'd286b22603d848bfbda8fe63a54dc092'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'car_class'
                                }
                            }
                            value: 'intermediate'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '513193a6af5b4305ad60359e2bff0008'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'car_destination'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '53d54e66394e479c80e8856202201794'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'dropoff_diff'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5466c09c11d64845956a48996004e8ef'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'state'
                            value: 'requested'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '54d6bfe804384ecba29cd269a3a89e91'
                        key: {
                            question: {
                                id: 'd286b22603d848bfbda8fe63a54dc092'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'car_class'
                                }
                            }
                            value: 'full_size'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '54eceed769f64275803abd5b5db37930'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_type'
                            value: 'air_travel'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '550a0ec2c6724c0396fd3c2b7b6eb500'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'job_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '563ed9d6aa5549c89bc69769bceba368'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'needs_approval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '56a36420b5ad472ebfc545447a2704ac'
                        key: {
                            sys_ui_form: {
                                id: '2e7bccba309f4f95bbfeda15dcba56a2'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '2aea9b62de79417b8696eed2101df779'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '592e4b4bfbc144c6ba6c96194415d1a3'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'airline'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_hub_flow_stage'
                        id: '5967e2b5bf834ff78bc26cb93e5b24c7'
                        key: {
                            flow: 'dab9a1018b8b4cdcb6b737c341441a82'
                            value: 'complete'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5aa25195b4e145c3b0a87a82c9402fef'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approval_routing_method'
                            value: 'parallel'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5b800fa1a44d49f8b75406b51cfe5219'
                        key: {
                            sys_security_acl: 'b12409e0e331477fb424ee661a314244'
                            sys_user_role: {
                                id: '3255c20111ff4528856dbb59166e3226'
                                key: {
                                    name: 'itil'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5d3b02b844ff4a28874e148ce204242a'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'car_destination'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '5f8518112d6f4f7ebfe169b04173d01c'
                        key: {
                            question: {
                                id: '1ae43c0371b44f3da56fdd16db86dcee'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'expense_type'
                                }
                            }
                            value: 'conferences'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '617d8715790a4b8f89e9249fb855105c'
                        key: {
                            question: {
                                id: '38ceba46cff548e5bbf5033af66d5447'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'air_class'
                                }
                            }
                            value: 'economy'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '61c90d762f6b46729b7e8ce7e6f68be0'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'plan_state'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6267775de23749ae9357a69efa54020d'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62bdac5c269c45d8a450805b61972042'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'total_amount'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '6410a8f761914c85a2e3ece571ad4bed'
                        key: {
                            cat_item: 'c3dd90e29eaf40e8aa7531b0950fcfc7'
                            variable_set: 'NULL'
                            name: 'report_name'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '642bb8aeb0d948a880ec80509e4953f2'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'return_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6485715252814a4081a9cde15e828667'
                        deleted: false
                        key: {
                            sys_ui_section: {
                                id: '0801254ee1a54b74978690a3390ff6e0'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Approvers'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '12M.x_trou_tande_travel_request.sysapproval_approver.sysapproval'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6517f6dfd73b4661a00f833165510615'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            caption: 'Travel Request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65d555c2369b4200a282e91ae9e9d005'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approval_rule'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68591978b1e742b3bac8d41c3c07adb6'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'approval_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '6a659866a32f4a7ba83c2d9b67c5dc6c'
                        key: {
                            cat_item: '4100526eeec148d68694c0c4f5a4f252'
                            variable_set: 'NULL'
                            name: 'trip_purpose'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6b7971c8b2cb4200accd68bb1c08d957'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'passenger'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '6c36853ded374dae8c89e950b50e790d'
                        key: {
                            question: {
                                id: '7d93562f9f5a43b0b002e81764bef47a'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'airline'
                                }
                            }
                            value: 'frontier'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '6c877d782f874a989a0496b549ddb927'
                        key: {
                            role: {
                                id: 'dde028492f5047ea81238d716d14cde7'
                                key: {
                                    name: 'x_trou_tande.workspace'
                                }
                            }
                            contains: {
                                id: '1ec390b0f96b478985a088d4ee1307db'
                                key: {
                                    name: 'canvas_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6da3ccd6b8a74c21a2507e294bbf0df5'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'plan_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6e05a8eefa884bc1b79d49d2b616d866'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'rule_type'
                            value: 'job_chain'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6e8c72c0969741369497d383af88997d'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approving_table'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '6e97378c02d04a34b3fd7e6065b311b1'
                        key: {
                            question: {
                                id: '8308c63d2126413dbeac4fcb360ba984'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'agency'
                                }
                            }
                            value: 'enterprise'
                        }
                    },
                    {
                        table: 'par_dashboard_canvas'
                        id: '6eaa0dc6f81c463bae942a77be0cbe4f'
                        key: {
                            dashboard: '43e4c15aaab44ee287a948513e47462e'
                            dashboard_tab: '0cb823725f4e4ebbafc1a3d988da63ff'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '73356b079edd42bf893773e0590a3d25'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'sequence'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '734630be041d4522b2965e47554c93a5'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'gl_account'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73b0440d4e1b4bf4953ccb74e8078338'
                        key: {
                            name: 'x_trou_tande_approval_group'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '742160dc75544d43abaa9e6adb485a69'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'state'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '74bf292cdd8c4ef783b45ec83bb8ee4c'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'approval_routing_method'
                            value: 'sequential'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7595b655770540dc9ae05565a94ebbb4'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '765d890d904945b3b9fcef297b3b643e'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'departments'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '766c6e05baaf486ab2258112ae862d82'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'gl_account'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '766e6a7366bd46dfb31ab3dbab947de7'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_type'
                            value: 'dues_fees'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77791d7be9ba4ccd9c609556cf86ff08'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'approval_routing_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '77b55105292f4f0c99ae9cd1a9fc3de3'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '78b4c824db1048cf90d7f37db999f52d'
                        key: {
                            name: 'x_trou_tande_approval_group'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7977437087e44bbca62958ba8eb17685'
                        deleted: true
                        key: {
                            list_id: {
                                id: 'f7e68ca3e48047638c5222dfefa5e9c3'
                                key: {
                                    name: 'sysapproval_approver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: '4bd560d295dd4fc68b93b7825c76e294'
                                    parent: 'x_trou_tande_travel_request'
                                }
                            }
                            element: 'comments'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '798e5561bf7a459d935743170039599a'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'request_item'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7bbb411215f343c689284b821b3e3ddd'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'users'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '7c7c3ebeda5141a384bd84af76a15bf3'
                        key: {
                            question: {
                                id: 'd286b22603d848bfbda8fe63a54dc092'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'car_class'
                                }
                            }
                            value: 'standard'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7cabe46ce7fe4b63bb10f7177581894c'
                        deleted: true
                        key: {
                            list_id: {
                                id: 'f7e68ca3e48047638c5222dfefa5e9c3'
                                key: {
                                    name: 'sysapproval_approver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: '4bd560d295dd4fc68b93b7825c76e294'
                                    parent: 'x_trou_tande_travel_request'
                                }
                            }
                            element: 'approver'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7d93562f9f5a43b0b002e81764bef47a'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'airline'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7dc460ee076446afaf9df3e93d458574'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'plan_state'
                            value: 'not_required'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '7dccb7e6c0f1458889748e11112720a9'
                        key: {
                            sc_cat_item: '4100526eeec148d68694c0c4f5a4f252'
                            sc_catalog: 'e0d08b13c3330100c8b837659bba8fb4'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '7eb9c5af2e72423684123d6c6d74be84'
                        key: {
                            question: {
                                id: '1ae43c0371b44f3da56fdd16db86dcee'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'expense_type'
                                }
                            }
                            value: 'dues_fees'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7edd1e027b88440aa55344490ffc341a'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'pickup'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '7fc1d74eff604e69bae03d63a424cb4b'
                        key: {
                            question: {
                                id: '8308c63d2126413dbeac4fcb360ba984'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'agency'
                                }
                            }
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '803af3c2a8714b58b6fc081f67cfe0f0'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'send_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '80ee4653d54f426591d5fe6eff7b4877'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '7'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8308c63d2126413dbeac4fcb360ba984'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'agency'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83b0d8e4264d442892a84d16ef73a583'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'job_level'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '83ca0deec7304decb4eff83582a296b7'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'expense_date'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '83f95e2e081b4bdc8cf6ce5df4d1644b'
                        key: {
                            sc_cat_item: '4100526eeec148d68694c0c4f5a4f252'
                            sc_catalog: '7a7798fd5357101077b6ddeeff7b1294'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '867d4d67d8324d529a0bfc66c0f57a58'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'send_to'
                            value: 'all_managers_hierarchy'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '89bcdd217e814a60a56270d5508d795a'
                        deleted: true
                        key: {
                            list_id: {
                                id: '8f5cc30209754812a2f844d85b889baf'
                                key: {
                                    name: 'x_trou_tande_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'expense_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8c62b1ee635b46279edbf264e26080c3'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'exclude_users'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8d98571d3aef47d5ac697babf7661f9e'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'exclude_job_codes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '8d9aebe203b243e895308c986a6d9dae'
                        key: {
                            question: {
                                id: '7d93562f9f5a43b0b002e81764bef47a'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'airline'
                                }
                            }
                            value: 'delta'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e1dfd33c20a432087be072cdca56471'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'approval_group'
                        }
                    },
                    {
                        table: 'sys_hub_flow_stage'
                        id: '8eb4536de1d24d929b8b045dd95b0779'
                        key: {
                            flow: 'dab9a1018b8b4cdcb6b737c341441a82'
                            value: 'approval'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f1796975a2c48c4bba56f857879cf9e'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'approval_routing_method'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8f1ee541b08f4f74b3306e130bb403db'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'agency'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '8f5cc30209754812a2f844d85b889baf'
                        deleted: true
                        key: {
                            name: 'x_trou_tande_expense_line'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9077716649a84c659fb7dc630dcc24cf'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'departments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '90baa8d674764fcd9916bd0edef85126'
                        key: {
                            cat_item: 'c3dd90e29eaf40e8aa7531b0950fcfc7'
                            variable_set: 'NULL'
                            name: 'total_amount'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '90ccc89112444c8981075e19377c30f3'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approval_routing_method'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '91a0f48c84024d858e239cf0f34c04a9'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'plan_state'
                            value: 'work_in_progress'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '91f52530658140778a7557ef0a3424de'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '92d7218f744c4674bdf7e1bd8290b9f0'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'pickup'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '93102229535148d19f9f1d648fb778fa'
                        key: {
                            question: {
                                id: '38ceba46cff548e5bbf5033af66d5447'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'air_class'
                                }
                            }
                            value: 'business'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9332910005ea45779fe4d70ed9370e0b'
                        key: {
                            question: {
                                id: '1ae43c0371b44f3da56fdd16db86dcee'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'expense_type'
                                }
                            }
                            value: 'training'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '934d20c5108f46f7bc88ff441f7cc4d2'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '0801254ee1a54b74978690a3390ff6e0'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Approvers'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'REL.x_trou_tande_travel_request.REL:4bd560d295dd4fc68b93b7825c76e294'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '958b3fd3fa6147de926770c62cc93d79'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'amount_max'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9715321fe4c144dd927db306b1b00ac2'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approving_record'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9793f59e40154084a73a2666f808db3c'
                        key: {
                            question: {
                                id: '8308c63d2126413dbeac4fcb360ba984'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'agency'
                                }
                            }
                            value: 'avis'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9851c8f27cad4ecab6d09214b6249caa'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'exclude_departments'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a7a35786fd441449bfe327f7785e162'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'rule_type'
                            value: 'managerial_hierarchy'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9b17ff678d4d477fabaf9f14e5e38fa9'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'approval_group'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9b197add132245c49c63c51336e4de66'
                        key: {
                            name: 'x_trou_tande_approval_group'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9bf58e6e2f02464685a06531d85e627c'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'approver'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9c1c087a244e414ea649db9eb80b542a'
                        key: {
                            sys_security_acl: 'ed90836a05c14d4089a88fd043a1fb35'
                            sys_user_role: {
                                id: 'b2a7d687d46f4595907c1a779854ef92'
                                key: {
                                    name: 'itil'
                                }
                            }
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9d34fb8b5ea04a5fb6b5765cda9c3e45'
                        key: {
                            question: {
                                id: '7d93562f9f5a43b0b002e81764bef47a'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'airline'
                                }
                            }
                            value: 'united'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d4dee78d65242f693a683a96caff244'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'trip_purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9d5a990317b349acb5e51aa706074d07'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9d8aa71d2dc446e59ce1b71b5ac0022c'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'total_amount'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9f3ac7deb1614dcdbbbafa48e5bb03ed'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'rule_type'
                            value: 'users'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'a0c33cf017674be0a16ce6c73a56df31'
                        deleted: true
                        key: {
                            list_id: {
                                id: 'f7e68ca3e48047638c5222dfefa5e9c3'
                                key: {
                                    name: 'sysapproval_approver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: '4bd560d295dd4fc68b93b7825c76e294'
                                    parent: 'x_trou_tande_travel_request'
                                }
                            }
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a1effd82f0494c6bb5d940e3f7615838'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'organization'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a3c25bdd192d4d978f59edf38e4d38a6'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'plan_state'
                            value: 'rejected'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a4126600dbc049b1ab61813a09854fc8'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'trip_purpose'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a46a91d0f3a84ca0b64b838232a4f472'
                        key: {
                            sys_ui_section: {
                                id: '2a67f6d9796e4ad8bb91adf3b2496e7d'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '12M.x_trou_tande_travel_request.x_trou_tande_approval_plan.approving_record'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a719386b879c47c9983f10bb1f972771'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '14'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'a7a605bbb0f44f32a480ffb0badcd9cc'
                        key: {
                            question: {
                                id: '1ae43c0371b44f3da56fdd16db86dcee'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'expense_type'
                                }
                            }
                            value: 'air_travel'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a7cbf1e1457f4e9db7d86077f2dac33f'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'send_to'
                            value: 'up_to_levels'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a7f35c6716714879aca481b9d2fa07ad'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'airline'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a927ab2e51764ddb8bee0dc35d11f8e9'
                        key: {
                            name: 'x_trou_tande_travel_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aa458f15cd8949e8a311bab3c08b6038'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab3ce99cf3624c6ba2498b30e229aaad'
                        key: {
                            name: 'x_trou_tande_approval_group'
                            element: 'members'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ac6ce6d56ba44dcfb49ff60c5b980357'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'business_owner'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ae0deadfd05c41bbac8216e86413b561'
                        key: {
                            name: 'x_trou_tande_te_route'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aff1090911904fff8dcc3aa2a7dc1299'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_type'
                            value: 'hotel'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b059caf0dc0a4701bcf230edc998df6c'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'max_levels'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2b4e1e58cde4ee98c88928391e7c88c'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'return_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3f26f61da8b412a9d53a1fd5f1f4f22'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'amount_min'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b6156c2632eb491685a57645c6557755'
                        deleted: true
                        key: {
                            list_id: {
                                id: '8f5cc30209754812a2f844d85b889baf'
                                key: {
                                    name: 'x_trou_tande_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'expense_type'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'b61da58f9709443f834d4c13954750a1'
                        key: {
                            question: {
                                id: '1ae43c0371b44f3da56fdd16db86dcee'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'expense_type'
                                }
                            }
                            value: 'ground_car'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'b69fd8c53dfa4a32bc9010355a72c6d1'
                        key: {
                            question: {
                                id: 'd286b22603d848bfbda8fe63a54dc092'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'car_class'
                                }
                            }
                            value: 'suv'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'b977792cab3142ad86dcdb25999d62ca'
                        key: {
                            question: {
                                id: '7d93562f9f5a43b0b002e81764bef47a'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'airline'
                                }
                            }
                            value: 'southwest'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9da7fb983ba4ce99fe6cec8cdbde452'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b9efd00f4d3e45ce8053298fcbe8578e'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'travel_request'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ba0cde003ac9461b840f2550ce94a5b0'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'ba52dd435a174f01a66a9d610b9207d6'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bb2ac76b3d224f308413295165de0a32'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd179325c0ad40bfa6009e265de1affe'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd423ad1873a4759beecfe7f88e9ebda'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'return_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'be44825fa9ad4b4fa6029aa168bcf770'
                        deleted: true
                        key: {
                            list_id: {
                                id: '8f5cc30209754812a2f844d85b889baf'
                                key: {
                                    name: 'x_trou_tande_expense_line'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'business_purpose'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c0afee9a276d4f20b5f1fcecb379857e'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c121df21366948d69c07e4c5ef072b26'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assignment_group'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c17b329cfc3942e596fb08faa8d23bec'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'organization'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c21415fe3ebc4edf8879404f599f42dc'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'approval_plan'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c7ac675e1bd7403f8b88f9cdfe7839b9'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'send_to'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c903b9f746614f5e9449bbe179021d18'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'business_purpose'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c919b0383bf44ff49da6c6b249d29575'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'exclude_users'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'cb2eaf061edd43ca82281d781557f1c3'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'cba1b5239f1e499fa049faf345f2df7e'
                        key: {
                            question: {
                                id: '38ceba46cff548e5bbf5033af66d5447'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'air_class'
                                }
                            }
                            value: 'first'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd3a0f31b90944d1a4ba45a1b04a34f6'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'sequence'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cdca8d79344c4b3c890805f25dfe2d08'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'trip_purpose'
                            position: '13'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'cf359689acd04ef49f0d8121f98abd7a'
                        key: {
                            question: {
                                id: '1ae43c0371b44f3da56fdd16db86dcee'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'expense_type'
                                }
                            }
                            value: 'meals'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0fe4483f45a4c8b913d54596ac9438c'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'max_levels'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd16941db77204ac8997c683eadaf77e2'
                        key: {
                            name: 'x_trou_tande_te_route'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2527bac33524d1f96361902d70b78e6'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_date'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'd283b3e842504602918d48b6569b7997'
                        key: {
                            sys_ui_form: {
                                id: '2e7bccba309f4f95bbfeda15dcba56a2'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '2a67f6d9796e4ad8bb91adf3b2496e7d'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Approval'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd286b22603d848bfbda8fe63a54dc092'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'car_class'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd384a87442c44591abb6937c2f52110d'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'amount'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd391dff3645a419cb72c478806a6942c'
                        key: {
                            name: 'x_trou_tande_travel_request'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd432d70853d942e5b7f70bbe0011e5a0'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'requested_for'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'd51e20ff919045bbbf296aeef493eab4'
                        key: {
                            category: {
                                id: 'ba52dd435a174f01a66a9d610b9207d6'
                                key: {
                                    name: 'x_trou_tande_approval_plan'
                                }
                            }
                            prefix: 'TAPL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'd5593ff271e54a9c8eea89c990fe0341'
                        key: {
                            sys_ui_form: {
                                id: '2e7bccba309f4f95bbfeda15dcba56a2'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '16b69adb94fc4e6b8fe52dc061c2bb0f'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Expense Lines'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd5c1cb3bd45a40ddba8d07d295c129f9'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'send_to'
                            value: 'most_senior_manager'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd72631a29fd94243a3100d71d722e545'
                        key: {
                            name: 'x_trou_tande_expense_line'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd759fbe0b40f453a80ef6dabe25b7ee0'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'plan_state'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd79d9f7ad5de4da9ab74f7651f4a77c0'
                        key: {
                            question: {
                                id: '38ceba46cff548e5bbf5033af66d5447'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'air_class'
                                }
                            }
                            value: 'premium_economy'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd7e05076cf63480fbbeea83a29b44083'
                        key: {
                            cat_item: '4100526eeec148d68694c0c4f5a4f252'
                            variable_set: 'NULL'
                            name: 'report_name'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd9152972d53d45f6b5b630e980973a38'
                        key: {
                            question: {
                                id: '7d93562f9f5a43b0b002e81764bef47a'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'airline'
                                }
                            }
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da8c54b814de4064aa856ffb3537b732'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'request_item'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da90157149b2408c826a4496d8abdbe6'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'air_class'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc7a7c26196b4ea9bbaf3c35f98a013c'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dca1c1ae0fca45a3b6efecdf42e0f28a'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'car_class'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dcff7fa8c6f64d80ab4d57ea5683699a'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'depart'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'dd85fb77326642798bfd63f3216107cc'
                        key: {
                            name: 'x_trou_tande_approval_group'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'dde028492f5047ea81238d716d14cde7'
                        key: {
                            name: 'x_trou_tande.workspace'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'df152f91aaab4262ae383f6dfd3e3f13'
                        key: {
                            question: {
                                id: '7d93562f9f5a43b0b002e81764bef47a'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'airline'
                                }
                            }
                            value: 'american'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e03e4831a7094dba9763f36676f2f675'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'business_purpose'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0dfaeee522d445894143032feb323ce'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approver_list'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e37ce81851ca4f519a7f413a09905958'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'order'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e3c349cae5e84f7c90e0c7181d07080c'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'air_destination'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e617c92d19ab481a8116361ba3973875'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e66534978d934f49b15ea1fa19f287f8'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'air_destination'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e6c3c6e10b2f43e69399ac0b86743584'
                        key: {
                            sys_ui_section: {
                                id: '16b69adb94fc4e6b8fe52dc061c2bb0f'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Expense Lines'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '12M.x_trou_tande_travel_request.x_trou_tande_expense_line.travel_request'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e73b9b0b8b4c4677a4ba56a79d4c0087'
                        key: {
                            name: 'x_trou_tande_approval_group'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e740d1cea1cd4001a5a0d84fa0ce4485'
                        key: {
                            name: 'x_trou_tande_te_route'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7576be721db4770b0f0398a6c57db5f'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'dropoff_diff'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e7ca876c8db44ae5816784daf0499352'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approval'
                            position: '8'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'e9070941b0954c06a3d8c430b220d04f'
                        key: {
                            question: {
                                id: '1ae43c0371b44f3da56fdd16db86dcee'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'expense_type'
                                }
                            }
                            value: 'ground_taxi'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e96bf9d77dc741bc94fccf4fba93a780'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'car_class'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea4a60ee59984f10a724bd3fea228535'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eba5525862aa49ebaebed89db4c873a9'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'report_name'
                            position: '3'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ebf02dca46834133b321f3780898b89d'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ec49d365f27a45f080000dd96898e8b6'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ecb146c0017c4ea8b77a623a01882a01'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'approval_required'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'eda417598dfc4b27b46e3aa41efbcf7a'
                        key: {
                            question: {
                                id: '7d93562f9f5a43b0b002e81764bef47a'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'airline'
                                }
                            }
                            value: 'jetblue'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee61c7aee2d24bd7bcc13cb2d4591720'
                        key: {
                            name: 'x_trou_tande_approval_group'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f033ccd2c82f4b4784ab27b6c204f182'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'send_to'
                            value: 'up_to_job_level'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f0fe23ec815f4e9c8f9ba8587143b18f'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f13bb9a17ae24898b093ef45f39694f1'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_type'
                            value: 'conferences'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f1ac1bdbcb524182aebdd20efd676399'
                        key: {
                            sys_ui_section: {
                                id: '2aea9b62de79417b8696eed2101df779'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Activity'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'activity.xml'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f1bbd02932aa4be2a4c69d265d81d6ac'
                        key: {
                            name: 'x_trou_tande_approval_group'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f1be96cbe7dd48e394443ad3393f32c9'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'gl_account'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f2868c170c2c40de948d36c6b450f6b1'
                        key: {
                            cat_item: 'NULL'
                            variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                            name: 'dropoff'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f40acfa7765c47e8b6a2a8b9cbda7324'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'air_class'
                            language: 'en'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'f5b2b56a57c049479514f157fe88e347'
                        key: {
                            question: {
                                id: '8308c63d2126413dbeac4fcb360ba984'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'agency'
                                }
                            }
                            value: 'national'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f7557cb318f04d119df483e45571acec'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'amount'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'f7e68ca3e48047638c5222dfefa5e9c3'
                        deleted: true
                        key: {
                            name: 'sysapproval_approver'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: '4bd560d295dd4fc68b93b7825c76e294'
                            parent: 'x_trou_tande_travel_request'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: 'f8bdb7d68c7b4ed2b7320a74cfbda216'
                        key: {
                            sc_cat_item: 'c3dd90e29eaf40e8aa7531b0950fcfc7'
                            sc_catalog: '7a7798fd5357101077b6ddeeff7b1294'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'f8f583fe484842969f56583df1f1981c'
                        key: {
                            question: {
                                id: '7d93562f9f5a43b0b002e81764bef47a'
                                key: {
                                    cat_item: 'NULL'
                                    variable_set: '36602fe8a12246cd8dcac8fda6b6499e'
                                    name: 'airline'
                                }
                            }
                            value: 'alaska'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f9150f5706ff44b199c2e241a7d7d03c'
                        key: {
                            name: 'x_trou_tande_approval_plan'
                            element: 'approval_amount'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: 'f95ae0bce3fb413890c87cecc76baac8'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'x_trou_tande_travel_request'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f9c4dc63414b4f40b5726e5e5d86a712'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'plan'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fa052dd038eb451e9b3f480087285dbe'
                        key: {
                            name: 'x_trou_tande_approval_group'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa30538296b1451488c6d9f512a1d56e'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fab88546b35a444696cca6dc9bccfeb9'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'business_purpose'
                        }
                    },
                    {
                        table: 'par_dashboard_visibility'
                        id: 'fac17921eb0140479eff0b78973856ca'
                        key: {
                            dashboard: '43e4c15aaab44ee287a948513e47462e'
                            experience: '9f0ce2a026284fe4b7db59e58e8c1d21'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc02c1206a6b47c3af43c91da0750a90'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'approving_record'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc4944f29cae413093f9fce1cf51bdb0'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'enable_self_approval'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd57a1085b0248c59d7495021f7a5753'
                        key: {
                            name: 'x_trou_tande_approval_group_plan'
                            element: 'approving_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'fdefbde3f90b44139696c374b11775b5'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'expense_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fee6daf1303341709b1857b3cde3c56d'
                        key: {
                            name: 'x_trou_tande_approval_rule'
                            element: 'exclude_job_codes'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fef775240117406ea8f49c1d373f36a3'
                        key: {
                            name: 'x_trou_tande_travel_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff471254b1594b7997d2869b368a72cc'
                        key: {
                            name: 'x_trou_tande_expense_line'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fff0973f864e415d90a8beeaafeac0b7'
                        key: {
                            sys_ui_section: {
                                id: '6517f6dfd73b4661a00f833165510615'
                                key: {
                                    name: 'x_trou_tande_travel_request'
                                    caption: 'Travel Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                ]
            }
        }
    }
}
