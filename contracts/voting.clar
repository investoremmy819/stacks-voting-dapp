;; Simple on-chain voting contract
(define-data-var yes-count uint u0)
(define-data-var no-count uint u0)
(define-map voters { voter: principal } { voted: bool })

(define-public (vote-yes)
  (begin
    (asserts! (is-none (map-get? voters { voter: tx-sender })) (err u401))
    (map-set voters { voter: tx-sender } { voted: true })
    (var-set yes-count (+ (var-get yes-count) u1))
    (ok true)
  )
)

(define-public (vote-no)
  (begin
    (asserts! (is-none (map-get? voters { voter: tx-sender })) (err u401))
    (map-set voters { voter: tx-sender } { voted: true })
    (var-set no-count (+ (var-get no-count) u1))
    (ok true)
  )
)

(define-read-only (get-results)
  (ok { yes: (var-get yes-count), no: (var-get no-count) })
)

